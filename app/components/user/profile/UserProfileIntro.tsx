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
        <div className="relative flex flex-col gap-5 sm:block">
            <div className="relative flex flex-row gap-8 items-center justify-center sm:justify-normal">
                <div className="relative flex-shrink-0">
                    <Image
                        src={validateURLAvatar(imgUrl)}
                        priority
                        alt="avatar"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-36 h-36 sm:w-64 sm:h-64 rounded-full object-cover border border-primary-blue-cus transition-all duration-500"
                    />
                </div>
                <div className="relative flex flex-col sm:flex-grow gap-5">
                    <div className="flex md:flex-row flex-col md:items-center gap-3 md:gap-0 transition-all duration-500">
                        <div className="md:text-4xl text-3xl font-semibold whitespace-nowrap">
                            {validateName(fullName)}
                        </div>
                        <div className="md:flex-grow md:block hidden" />
                        <div className="text-gray-500 text-lg font-medium underline cursor-pointer">
                            Báo cáo người dùng
                        </div>
                    </div>
                    <div className="sm:relative sm:flex md:flex-row sm:flex-col md:items-center sm:gap-5 hidden transition-all duration-500">
                        <div className="relative">
                            <Button
                                title="Trò chuyện"
                                style="py-3 px-14 text-xl group"
                                icon={<BsFillChatDotsFill size={20} className="group-hover:text-primary-blue-cus" />}
                            />
                        </div>
                        <div className="relative">
                            <Button
                                title="Đăng ký"
                                style="py-3 px-12 text-xl"
                            />
                        </div>
                    </div>
                    <div className="sm:relative sm:block sm:space-x-1 hidden">
                        <span className="text-xl font-semibold text-gray-600">
                            Mô tả:
                        </span>
                        <span className="text-lg font-medium text-gray-500">
                            {validateDes(sortProfile)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-row justify-center gap-5 sm:hidden">
                <div className="relative">
                    <Button
                        title="Trò chuyện"
                        style="py-3 px-14 text-xl group"
                        icon={<BsFillChatDotsFill size={20} className="group-hover:text-primary-blue-cus" />}
                    />
                </div>
                <div className="relative">
                    <Button
                        title="Đăng ký"
                        style="py-3 px-12 text-xl"
                    />
                </div>
            </div>
            <div className="relative space-x-1 sm:hidden">
                <span className="text-xl font-semibold text-gray-600">
                    Mô tả:
                </span>
                <span className="text-lg font-medium text-gray-500">
                    {validateDes(sortProfile)}
                </span>
            </div>
        </div>
    )
}

export default UserProfileIntro