'use client'

import { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { VscAccount } from "react-icons/vsc"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import Link from "next/link"

const Access = () => {
    const [showToggle, setShowToggle] = useState(false);

    const handleToggle = () => {
        setShowToggle(!showToggle);
    };

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
                                            py-2
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
                                                            font-medium 
                                                            pl-2 
                                                            text-sm 
                                                            w-52 
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
                                <VscAccount size={24} />
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
                        "
                    >
                        <ul className="space-y-2 list-none">
                            <li className="hover:bg-slate-200">
                                <Link
                                    href="/login"
                                    className="
                                        block 
                                        cursor-pointer 
                                        px-4 
                                        py-2
                                    "
                                >
                                    Login
                                </Link>
                            </li>
                            <li className="hover:bg-slate-200">
                                <Link
                                    href="/register"
                                    className="
                                        block 
                                        cursor-pointer 
                                        px-4 
                                        py-2
                                    "
                                >
                                    Register
                                </Link>
                            </li>
                        </ul>
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
                                <IoIosNotificationsOutline size={30} />
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
                            <div className="
                                    self-center
                                    items-center
                                    inline-flex
                                    cursor-pointer
                                    align-middle
                                "
                            >
                                <IoSettingsOutline size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    )
}

export default Access