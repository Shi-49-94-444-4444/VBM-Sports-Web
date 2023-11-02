"use client"

import Image from "next/image"

const ChatGroup = () => {
    return (
        <div className="col-span-3 overflow-auto gap-3 flex flex-col px-4 py-6 border-r border-black border-opacity-10">
            <div className="flex flex-row space-x-2 items-center">
                <div className="flex-shrink-0">
                    <Image
                        src="/images/avatar.jpg"
                        alt="avatar user"
                        height={100}
                        width={100}
                        className="object-cover w-20 h-20 rounded-full"
                    />
                </div>
                <section className="flex flex-col gap-1">
                    <label className="font-semibold text-2xl truncate hidden lg:block">Nhóm Cầu Lông</label>
                    <p className="text-gray-600 text-lg truncate hidden lg:block">Tin nhắn mới nhất</p>
                </section>
            </div>
        </div>
    )
}

export default ChatGroup