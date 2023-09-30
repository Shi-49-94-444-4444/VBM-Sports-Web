"use client"

import { useContext, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { VscAccount } from "react-icons/vsc"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { GlobalContext } from "@/contexts"
import { useRouter } from "next/router"
import Cookies from "js-cookie";

const Access = () => {
    const [showToggle, setShowToggle] = useState(false);
    const router = useRouter()
    const { isAuthUser, setIsAuthUser, setUser } = useContext(GlobalContext) || {}

    const handleToggle = () => {
        setShowToggle(!showToggle);
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
                        <div className="
                                box-border
                                md:flex
                            "
                        >
                            <div className="
                                    box-border 
                                    flex-grow-[2px] 
                                "
                            >
                                <form
                                    role="search"
                                    className="
                                        relative 
                                        flex 
                                        flex-row 
                                        items-center
                                    "
                                >
                                    <div className="
                                            absolute
                                            bg-search-cus
                                            rounded-full
                                            cursor-default
                                            py-1
                                            px-3
                                            right-0
                                            w-auto
                                            z-[1000]
                                        "
                                    >
                                        <div className="relative box-border">
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
                                                        <BiSearch size={24} />
                                                    </div>
                                                    <input
                                                        className="
                                                            bg-search-cus 
                                                            border-0 
                                                            outline-none 
                                                            focus:ring-0
                                                            font-medium 
                                                            pl-2 
                                                            text-base 
                                                            w-64 
                                                            z-[900]
                                                        "
                                                        placeholder="Tìm kiếm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
                            left-5 
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
                                        "
                                        type="button"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="space-y-2 list-none">
                                <li className="hover:bg-slate-200 hover:text-primary-blue-cus">
                                    <button className="
                                            block 
                                            cursor-pointer 
                                            px-4 
                                            py-2
                                        "
                                        type="button"
                                        onClick={() => router.push("/login")}
                                    >
                                        Login
                                    </button>
                                </li>
                                <li className="over:bg-slate-200 hover:text-primary-blue-cus">
                                    <button className="
                                            block 
                                            cursor-pointer 
                                            px-4 
                                            py-2
                                        "
                                        type="button"
                                        onClick={() => router.push("/register")}
                                    >
                                        Register
                                    </button>
                                </li>
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
                                onClick={() => router.push("/setting")}
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