"use client"

import { useContext, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { VscAccount } from "react-icons/vsc"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { GlobalContext } from "@/contexts"
import { useRouter } from 'next/navigation'
import Cookies from "js-cookie";
import { beforeNavUser } from "@/utils"
import OutsideClickHandler from "react-outside-click-handler"
import SearchBar from "../SearchBar"

const Access = () => {
    const [showToggle, setShowToggle] = useState(false);
    const router = useRouter()
    const { isAuthUser, setIsAuthUser, setUser, user } = useContext(GlobalContext) || {}

    const handleToggle = () => {
        setShowToggle(!showToggle);
    };

    const handleOutsideClick = () => {
        setShowToggle(false);
    };

    const handleLogout = () => {
        if (setIsAuthUser && setUser) {
            setIsAuthUser(false)
            setUser(null)
        }
        Cookies.remove("token")
        localStorage.clear()
        router.push("/")
    }

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
            <li className="relative inline-flex">
                <OutsideClickHandler onOutsideClick={handleOutsideClick}>
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
                                    <VscAccount size={30} />
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
                                    <li className="hover:bg-slate-200 hover:text-primary-blue-cus">
                                        <button className="
                                            block 
                                            cursor-pointer 
                                            px-4 
                                            py-2
                                            whitespace-nowrap
                                        "
                                            type="button"
                                            onClick={() => router.push(`/user/profile-user/${user?.id ?? "1"}`)}
                                        >
                                            Hồ sơ
                                        </button>
                                    </li>
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
                                                onClick={() => router.push(item.href)}
                                            >
                                                {item.label}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </OutsideClickHandler>
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
                                onClick={() => router.push("/user/setting-profile")}
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