"use client"

import { GlobalContext } from "@/contexts"
import { AxiosClient } from "@/services"
import { ChatRoom } from "@/types"
import Image from "next/image"
import { useContext } from "react"
import useSWR from "swr"
import { LoadingFullScreen } from "../../providers"
import { validateURLAvatar } from "@/utils"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const ChatGroup = () => {
    const { user, setRoomId } = useContext(GlobalContext) || {}

    const { data: listRoom, error } = useSWR<ChatRoom>(user && user.id ? `/api/chat/user/${user.id}/rooms` : null, fetcher)

    const isLoading = !listRoom && !error

    return (
        <div className="md:col-span-3 col-span-2 overflow-y-auto overflow-x-hidden gap-2 md:gap-5 flex flex-col md:py-6 py-2 border-r border-black border-opacity-10 w-24 md:w-auto">
            {isLoading ? (
                <LoadingFullScreen loading={isLoading} />
            ) : !listRoom || listRoom.data.length === 0 ? (
                <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold">
                    Không có nhóm chat nào cả
                </div>
            ) : listRoom && listRoom.data == null ? (
                <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold">
                    Lỗi Api! Đang fix ...
                </div>
            ) : (
                listRoom.data.map((room) => (
                    <div
                        className="flex flex-row space-x-2 items-center cursor-pointer px-4"
                        key={room.roomId}
                        onClick={() => {
                            if (setRoomId)
                                setRoomId(room.roomId)
                        }}
                    >
                        <div className="flex-shrink-0">
                            <Image
                                src={validateURLAvatar(room.coverImg)}
                                alt={`image roomId ${room.roomId}`}
                                height={100}
                                width={100}
                                className="object-cover md:w-20 md:h-20 h-16 w-16 rounded-full border border-primary-blue-cus"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="font-semibold text-xl truncate w-52 md:block hidden">{room.chatTitle}</label>
                            <p className="text-gray-600 text-lg truncate w-52 md:block hidden">{room.lastSendMsg}</p>
                            <p className="text-gray-600 text-sm truncate w-52 md:block hidden">{room.lastSendTime}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default ChatGroup