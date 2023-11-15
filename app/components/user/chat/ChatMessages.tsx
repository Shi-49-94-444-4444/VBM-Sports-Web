"use client"

import { AiOutlineSend } from "react-icons/ai"
import { FcAddImage } from "react-icons/fc"
import { Input } from "../../providers"
import { CiMenuKebab } from "react-icons/ci"
import Image from "next/image"
import { useContext, useEffect, useRef, useState } from "react"
import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore"
import { db } from "@/firebase"
import { useForm } from "react-hook-form"
import { GlobalContext } from "@/contexts"
import { format } from "date-fns"

const ChatMessages = () => {
    const messagesRef = useRef<HTMLDivElement>(null)
    const [messages, setMessages] = useState<any[]>([])
    const [value, setValue] = useState("")
    const { handleSubmit } = useForm()
    const { user } = useContext(GlobalContext) || {}

    const scrollToBottom = () => {
        if (messagesRef.current)
            messagesRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(scrollToBottom, [messages])

    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            limit(50)
        )
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messages: any = []
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                if (!(data.createdAt instanceof Date)) {
                    console.error('Invalid date:', data.createdAt);
                }
                messages.push({ ...data, id: doc.id })
            })
            setMessages(messages)
            //console.log(messages)
        })

        return () => unsubscribe()
    }, [])


    const handleSubmitMessage = async () => {
        if (value.trim() === "") {
            alert("Không được để trống")
            return
        }

        try {
            if (user) {
                const { uid, displayName } = user
                await addDoc(collection(db, "messages"), {
                    text: value,
                    name: displayName,
                    createdAt: serverTimestamp(),
                    uid
                })
            }
        } catch (error) {
            //console.log(error)
        }

        //console.log(value)
        setValue("")
    }

    return (
        <div className="col-span-8 flex flex-col ">
            <div className="py-4 px-6 flex flex-row justify-between border-b border-black border-opacity-10">
                <div className="flex space-x-2">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/avatar.jpg"
                            alt="avatar user"
                            height={100}
                            width={100}
                            className="object-cover w-16 h-16 rounded-full"
                        />
                    </div>
                    <section className="flex flex-col gap-1">
                        <label className="font-semibold text-2xl truncate">Nhóm Cầu Lông</label>
                        <p className="text-gray-600 text-lg truncate">Đang hoạt động</p>
                    </section>
                </div>
                <div className="relative flex items-center text-primary-blue-cus">
                    <CiMenuKebab size={40} />
                </div>
            </div>
            <div id="messages-wrapper" className="flex-grow flex flex-col h-80 overflow-auto py-2 px-6 gap-3">
                {messages.sort((a, b) => {
                    if (a.createdAt && b.createdAt) {
                        return a.createdAt.seconds - b.createdAt.seconds;
                    } else {
                        return 0;
                    }
                }).map((chat, index) => {
                    let time = '';
                    if (chat.createdAt) {
                        const date = new Date(chat.createdAt.seconds * 1000);
                        time = format(date, 'HH:mm');
                    }

                    return chat.uid === user?.uid ? (
                        <div className="flex flex-col items-end gap-1 text-lg item-end" key={index}>
                            <div className="text-gray-500">
                                Bạn
                            </div>
                            <div className="flex flex-row-reverse items-center">
                                <div className="px-5 py-3 bg-gray-100 text-center text-gray-600 rounded-lg border border-solid border-black border-opacity-10">
                                    {chat.text}
                                </div>
                                <div className="text-gray-500 pr-2">
                                    {time}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-1 text-lg" key={index}>
                            <div className="text-gray-500">
                                {chat.name}
                            </div>
                            <div className="flex flex-row space-x-2 items-center">
                                <div className="px-5 py-3 bg-gray-100 text-center text-gray-600 rounded-lg border border-solid border-black border-opacity-10">
                                    {chat.text}
                                </div>
                                <div className="text-gray-500">
                                    {time}
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div ref={messagesRef} ></div>
            </div>
            <form className="flex justify-between items-center w-full border-t border-black border-opacity-10 px-6 py-2" onSubmit={handleSubmit(handleSubmitMessage)}>
                <div className="relative w-full">
                    <Input
                        placeholder="Nhập tin nhắn"
                        colorInput="w-full ring-0 border-none px-0 text-lg pl-0 ml-0 py-0"
                        maxLength={999}
                        id="value"
                        name="value"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                </div>
                <div className="flex flex-row space-x-3 items-center">
                    <button className="relative">
                        <FcAddImage size={40} />
                    </button>
                    <button className="relative text-primary-blue-cus" type="submit">
                        <AiOutlineSend size={40} />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChatMessages