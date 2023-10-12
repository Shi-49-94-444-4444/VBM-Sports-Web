"use client"

import Image from "next/image"
import { BsFillChatDotsFill } from "react-icons/bs"
import { BiSolidBellRing } from "react-icons/bi"
import { UserProfile } from "@/types"
import { Button } from "../../providers"
import { validateDes, validateName, validateURLAvatar } from "@/utils"

const UserProfileIntro: React.FC<UserProfile> = ({
    imgUrl,
    fullName,
    sortProfile
}) => {
    return (
        <div className="relative flex flex-row gap-8 items-center">
            <div className="relative flex-shrink-0">
                <Image
                    src={validateURLAvatar(imgUrl)}
                    alt="avatar"
                    width="250"
                    height="250"
                    className="rounded-full object-cover"
                />
            </div>
            <div className="relative flex flex-col flex-grow gap-5">
                <div className="flex md:flex-row flex-col md:items-center gap-3 md:gap-0">
                    <div className="text-4xl font-semibold whitespace-nowrap">
                        {validateName(fullName)}
                    </div>
                    <div className="md:flex-grow md:block hidden" />
                    <div className="text-gray-500 text-lg font-medium underline cursor-pointer">
                        Báo cáo người dùng
                    </div>
                </div>
                <div className="relative flex flex-row items-center gap-5">
                    <Button
                        title="Chat"
                        style="py-3 px-20 text-xl group"
                        onClick={() => { }}
                        icon={<BsFillChatDotsFill size={20} className="group-hover:text-primary-blue-cus" />}
                    />
                    <div className="relative">
                        <BiSolidBellRing size={40} className="text-black text-opacity-80 cursor-pointer" />
                    </div>
                </div>
                <div className="relative flex flex-col gap-5">
                    <div className="text-xl font-semibold text-gray-600">
                        Mô tả
                    </div>
                    <div className="text-lg font-medium text-gray-500">
                        {validateDes(sortProfile)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfileIntro