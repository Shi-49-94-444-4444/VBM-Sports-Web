"use client"

import { useContext, useRef, useState } from "react"
import { VscAccount } from "react-icons/vsc"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { GlobalContext } from "@/contexts"
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import { beforeNavUser, useOutsideClick, validateURLAvatar } from "@/utils"
import SearchBar from "../SearchBar"
import Image from "next/image"

const Access = () => {
    const [showToggle, setShowToggle] = useState(false);
    const router = useRouter()
    const { isAuthUser, setIsAuthUser, setUser, user, setIsRefresh } = useContext(GlobalContext) || {}

    const handleToggle = () => {
        setShowToggle(!showToggle);
    }

    const handleOutsideClick = () => {
        setShowToggle(false);
    }

    const handleLogout = async () => {
        if (setIsAuthUser && setUser) {
            setIsAuthUser(false)
            setUser(null)
        }
        Cookies.remove("token")
        localStorage.clear()
        if (setIsRefresh) setIsRefresh(true)
    }

    const ref = useRef<HTMLLIElement | null>(null)
    useOutsideClick(ref, handleOutsideClick)

    return (
        <ul className="
                flex 
                items-center 
                list-none
            "
        >
            <li className="relative inline-flex">
                <div className="
                        box-border 
                        lg:pl-4 
                        lg:pr-1
                    "
                >
                    <div className="
                            relative 
                            inline-flex 
                            py-4 
                        "
                    >
                        <SearchBar />
                    </div>
                </div>
            </li>
            <li className="relative inline-flex" ref={ref}>
                <div
                    className="
                        border-box 
                        pl-4 
                        pr-1 
                        md:pl-5
                    "
                    onClick={handleToggle}
                >
                    <div className="
                            bg-transparent 
                            border-none 
                            cursor-pointer
                        "
                    >
                        <div className="
                                items-center 
                                box-border 
                                flex
                            "
                        >
                            <div className="
                                    self-center
                                    items-center
                                    inline-flex
                                    cursor-pointer
                                    align-middle
                                "
                            >
                                {isAuthUser ? (
                                    <Image
                                        src={validateURLAvatar(user && user.avatar)}
                                        alt="avatar"
                                        width={200}
                                        height={200}
                                        className="object-cover rounded-full w-10 h-10 border border-pri"
                                    />
                                ) : (
                                    <VscAccount size={30} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {showToggle && (
                    <div className="
                            absolute 
                            top-8 
                            -left-16 
                            bg-white 
                            rounded-lg 
                            shadow-md 
                            py-2
                            font-bold
                            text-gray-600
                        "
                    >
                        {isAuthUser ? (
                            <ul className="space-y-2 list-none">
                                {user && user.role && user.role.toLowerCase() === "admin" ? (
                                    <></>
                                ) : (
                                    <li className="hover:bg-slate-200 hover:text-primary-blue-cus">
                                        <button className="
                                                block 
                                                cursor-pointer 
                                                px-4 
                                                py-2
                                                whitespace-nowrap
                                            "
                                            type="button"
                                            onClick={() => router.replace(`/user/profile-user/${user?.id ?? "1"}`)}
                                        >
                                            Hồ sơ
                                        </button>
                                    </li>
                                )}
                                <li className="hover:bg-slate-200 hover:text-primary-blue-cus">
                                    <button className="
                                            block 
                                            cursor-pointer 
                                            px-4 
                                            py-2
                                            whitespace-nowrap
                                        "
                                        type="button"
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="space-y-2 list-none">
                                {beforeNavUser.map((item, index) => (
                                    <li className="hover:bg-slate-200 hover:text-primary-blue-cus" key={index}>
                                        <button className="
                                            block 
                                            cursor-pointer 
                                            px-4 
                                            py-2
                                            whitespace-nowrap
                                        "
                                            type="button"
                                            onClick={() => router.replace(item.href)}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </li>
            <li className="relative inline-flex">
                <div
                    className="
                        border-box 
                        pl-4 
                        pr-1 
                        md:pl-5
                    "
                >
                    <div className="
                            bg-transparent 
                            border-none 
                            cursor-pointer
                        "
                    >
                        <div className="
                                items-center 
                                box-border 
                                flex
                            "
                        >
                            <div className="
                                    self-center
                                    items-center
                                    inline-flex
                                    cursor-pointer
                                    align-middle
                                "
                            >
                                <IoIosNotificationsOutline size={34} />
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="relative inline-flex">
                <div
                    className="
                        border-box 
                        pl-4 
                        pr-0 
                        md:pl-5 
                        md:pr-5
                    "
                >
                    <div className="
                            bg-transparent 
                            border-none 
                            cursor-pointer
                        "
                    >
                        <div className="
                                items-center 
                                box-border 
                                flex
                            "
                        >
                            <button className="
                                    self-center
                                    items-center
                                    inline-flex
                                    cursor-pointer
                                    align-middle
                                "
                                type="button"
                                onClick={() => router.replace("/user/setting-profile")}
                            >
                                <IoSettingsOutline size={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Access