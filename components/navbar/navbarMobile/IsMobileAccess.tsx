'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { VscAccount } from 'react-icons/vsc'
import { BiMenu } from 'react-icons/bi'

interface IsMobileAccessPros {
    onclick: () => void;
}

const IsMobileAccess: React.FC<IsMobileAccessPros> = ({
    onclick
}) => {
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
                            z-[1999]
                            text-gray-600
                            font-bold
                        "
                    >
                        <ul className="space-y-2 list-none">
                            <li className="hover:bg-slate-200 hover:text-primary-blue-cus">
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
                            <li className="hover:bg-slate-200 hover:text-primary-blue-cus">
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
                                <Link href="/setting">
                                    <IoSettingsOutline size={24} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li className="relative inline-flex">
                <button
                    type="button"
                    className="
                        box-border 
                        transition 
                        duration-300 
                        pl-4 
                        pr-0 
                        md:pl-5
                         
                    "
                    data-tag="dropdown-menu"
                    aria-controls="dropdown-menu"
                    onClick={onclick}
                >
                    <div className="
                            relative 
                            inline-flex  
                            py-1
                        "
                    >
                        <div className="
                                inline-flex 
                                items-center 
                                cursor-pointer
                            "
                        >
                            <BiMenu size={30} />
                        </div>
                    </div>
                </button>
            </li>
        </ul>
    )
}

export default IsMobileAccess