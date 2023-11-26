"use client"

import { GlobalContext } from "@/contexts"
import { ChatRoomData } from "@/types"
import Image from "next/image"
import { useContext } from "react"
import { validateURLAvatar } from "@/utils"

interface ChatGroupProps {
    listRoom: ChatRoomData[]
}

const ChatGroup: React.FC<ChatGroupProps> = ({
    listRoom
}) => {
    const { setRoomId } = useContext(GlobalContext) || {}

    return (
        <div className="md:col-span-3 col-span-2 overflow-y-auto overflow-x-hidden gap-2 md:gap-5 flex flex-col md:py-6 py-2 border-r border-black border-opacity-10 w-24 md:w-auto h-[52rem]">
            {listRoom.map((room) => (
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
                    <div className="flex flex-col gap-1 w-60">
                        <label className="font-semibold text-xl truncate md:block hidden">{room.chatTitle}</label>
                        <p className="text-gray-600 text-lg truncate md:block hidden">{room.lastSendMsg}</p>
                        <p className="text-gray-600 text-sm truncate md:block hidden">{room.lastSendTime}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatGroup