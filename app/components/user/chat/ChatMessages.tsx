"use client"

import { AiOutlineSend } from "react-icons/ai"
import { FcAddImage } from "react-icons/fc"
import { Input, Loading, LoadingFullScreen } from "../../providers"
import { CiMenuKebab } from "react-icons/ci"
import Image from "next/image"
import { useContext, useEffect, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import { GlobalContext } from "@/contexts"
import { AxiosClient, base64ToLinkProcess, sendMessService } from "@/services"
import { ChatDetail, ChatRoom, SendMessForm } from "@/types"
import useSWR, { mutate } from "swr"
import { isValidUrl, processBase64Image, sendMessageSchema, validateURLAvatar } from "@/utils"
import { yupResolver } from "@hookform/resolvers/yup"
import { useDropzone } from "react-dropzone"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const ChatMessages = () => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const { handleSubmit, register, reset } = useForm<SendMessForm>({
        resolver: yupResolver(sendMessageSchema)
    })
    const { user, roomId, setIsLoading, isLoading } = useContext(GlobalContext) || {}
    const [firstLoad, setFirstLoad] = useState(true)
    const { getRootProps, getInputProps, open } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        },
        noClick: true,
        noKeyboard: true,
        onDrop: (acceptedFiles) => {
            acceptedFiles.forEach((file) => {
                const reader = new FileReader();

                reader.onload = async () => {
                    if (setIsLoading) setIsLoading(true)

                    const binaryStr = reader.result

                    if (binaryStr) {
                        const base64Rest = processBase64Image(binaryStr.toString())

                        const res = await base64ToLinkProcess({ imgUrl: base64Rest })

                        if (user && user.id && roomId) {
                            await sendMessService({
                                user_id: user.id,
                                message: res.imgUrl,
                                roomId: roomId
                            })
                            reset()
                            mutate(`/api/chat/${roomId}/detail?pageSize=100&pageNum=1`)
                            mutate(`/api/chat/user/${user.id}/rooms`)
                        }
                    }

                    if (setIsLoading) setIsLoading(false)
                }
                reader.readAsDataURL(file)
            })
        },
    })

    const { data: listMessage, error: errorMessage } = useSWR<ChatDetail>(roomId ? `/api/chat/${roomId}/detail?pageSize=100&pageNum=1` : null, fetcher)
    //console.log(listMessage);

    const { data: listRoom } = useSWR<ChatRoom>(user && user.id ? `/api/chat/user/${user.id}/rooms` : null, fetcher)

    const isLoadingMessage = !listMessage && !errorMessage

    const scrollToBottom = () => {
        if (messagesRef.current)
            messagesRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [listMessage?.data])

    useEffect(() => {
        if (listMessage) {
            setFirstLoad(false);
        }
    }, [listMessage])

    if (!listMessage && firstLoad) {
        return (
            <div className="md:col-span-9 col-span-10 flex justify-center items-center md:text-3xl text-2xl font-semibold text-primary-blue-cus">
                Vui lòng chọn nhóm chat
            </div>
        )
    }

    const sendMessage = async (data: SendMessForm) => {
        if (setIsLoading) setIsLoading(true)

        if (user && user.id && roomId) {
            await sendMessService({
                user_id: user.id,
                message: data.message,
                roomId: roomId
            })
            reset()
            mutate(`/api/chat/${roomId}/detail?pageSize=100&pageNum=1`)
            mutate(`/api/chat/user/${user.id}/rooms`)
        }

        if (setIsLoading) setIsLoading(false)
    }

    return (
        <div className="md:col-span-9 col-span-10 flex flex-col ">
            {isLoadingMessage ? (
                <div className="h-screen flex items-center justify-center">
                    <LoadingFullScreen loading={isLoadingMessage} />
                </div>
            ) : (
                <>
                    {listRoom && listRoom.data.filter(room => room.roomId === roomId).map((room) => (
                        <div className="md:py-4 py-2 md:px-6 px-8 flex flex-row justify-between border-b border-black border-opacity-10" key={room.roomId}>
                            <div className="flex space-x-2">
                                <div className="flex-shrink-0">
                                    <Image
                                        src={validateURLAvatar(room.coverImg)}
                                        alt={`roomId ${room.roomId}`}
                                        height={100}
                                        width={100}
                                        className="object-cover nd:w-16 md:h-16 w-14 h-14 rounded-full"
                                    />
                                </div>
                                <section className="flex flex-col gap-1">
                                    <label className="font-semibold md:text-2xl text-lg truncate">{room.chatTitle}</label>
                                    <p className="text-gray-600 text-lg truncate">Đang hoạt động</p>
                                </section>
                            </div>
                            {/* <div className="relative flex items-center text-primary-blue-cus">
                                <CiMenuKebab size={40} />
                            </div> */}
                        </div>
                    ))}
                    <div id="messages-wrapper" className="flex-grow flex flex-col h-[40rem] overflow-auto py-2 px-6 gap-3 transition-all duration-500">
                        {listMessage && listMessage.data.map((mess) => (
                            mess.userId === user?.id ? (
                                <div className="flex flex-col items-end gap-1 text-lg" key={mess.messageId}>
                                    <div className="text-gray-500">
                                        Bạn
                                    </div>
                                    <div className="flex flex-row-reverse items-center">
                                        {mess.message.startsWith("https://res.cloudinary.com") ? (
                                            <div className="bg-[#2768cf] text-left text-gray-600 rounded-lg border border-solid border-black border-opacity-10 flex-wrap break-words w-auto max-w-[24rem] md:max-w-[30rem] transition-all duration-500">
                                                <Image
                                                    src={mess.message}
                                                    alt={`Chat image ${mess.messageId}`}
                                                    width={500}
                                                    height={300}
                                                    placeholder="blur"
                                                    blurDataURL={mess.message}
                                                    className="object-contain rounded-lg"
                                                />
                                            </div>
                                        ) : mess.message.startsWith("https") ? (
                                            <a href={mess.message} className="px-4 py-2 bg-[#2768cf] text-left text-white rounded-lg border border-solid border-black border-opacity-10 flex-wrap break-words w-auto max-w-[14rem] md:max-w-[30rem] transition-all duration-500 text-sm font-medium hover:underline">
                                                {mess.message}
                                            </a>
                                        ) : (
                                            <div className="px-4 py-2 bg-[#2768cf] text-left text-white rounded-lg border border-solid border-black border-opacity-10 flex-wrap break-words w-auto max-w-[14rem] md:max-w-[30rem] transition-all duration-500 text-sm font-medium">
                                                {mess.message}
                                            </div>
                                        )}
                                        <div className="text-gray-500 pr-2 flex-shrink-0 whitespace-nowrap text-sm font-medium">
                                            {mess.sendTime}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-1 text-lg items-start" key={mess.messageId}>
                                    <div className="text-gray-500">
                                        {mess.sendUserName}
                                    </div>
                                    <div className="flex flex-row space-x-2 items-center">
                                        {mess.message.startsWith("https://res.cloudinary.com") ? (
                                            <div className="bg-gray-100 text-gray-600 rounded-lg border border-solid border-black border-opacity-10 flex-wrap break-words w-auto max-w-[24rem] md:max-w-[30rem] transition-all duration-500">
                                                <Image
                                                    src={mess.message}
                                                    alt={`Chat image ${mess.messageId}`}
                                                    width={500}
                                                    height={300}
                                                    placeholder="blur"
                                                    blurDataURL={mess.message}
                                                    className="object-contain rounded-lg"
                                                />
                                            </div>
                                        ) : mess.message.startsWith("https") ? (
                                            <a href={mess.message} className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg border border-solid border-black border-opacity-10 flex-wrap break-words w-auto max-w-[14rem] md:max-w-[30rem] transition-all duration-500 text-sm font-medium hover:underline">
                                                {mess.message}
                                            </a>
                                        ) : (
                                            <div className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg border border-solid border-black border-opacity-10 flex-wrap break-words w-auto max-w-[14rem] md:max-w-[30rem] transition-all duration-500 text-sm font-medium">
                                                {mess.message}
                                            </div>
                                        )}
                                        <div className="text-gray-500 flex-shrink-0 whitespace-nowrap text-sm font-medium">
                                            {mess.sendTime}
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                        <div ref={messagesRef} ></div>
                    </div>
                    <form className="flex justify-between items-center w-full border-t border-black border-opacity-10 px-6 py-2" onSubmit={handleSubmit(sendMessage)}>
                        <div className="relative w-full">
                            <Input
                                placeholder="Nhập tin nhắn"
                                colorInput="w-full ring-0 border-none px-0 text-lg pl-0 ml-0 py-0"
                                maxLength={999}
                                id="message"
                                name="message"
                                register={register}
                            />
                        </div>
                        <div className="flex flex-row space-x-3 items-center">
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <button type="button" onClick={open}>
                                    <FcAddImage size={40} />
                                </button>
                            </div>
                            {isLoading ? (
                                <Loading loading={isLoading} />
                            ) : (
                                <button className="relative text-primary-blue-cus" type="submit">
                                    <AiOutlineSend size={40} />
                                </button>
                            )}
                        </div>
                    </form>
                </>
            )
            }
        </div >
    )
}

export default ChatMessages