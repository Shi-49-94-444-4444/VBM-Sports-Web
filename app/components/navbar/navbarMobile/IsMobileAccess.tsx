"use client"

import Link from 'next/link';
import { useContext, useRef, useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { VscAccount } from 'react-icons/vsc';
import { BiMenu } from 'react-icons/bi'
import { GlobalContext } from '@/contexts';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { beforeNavUser, useOutsideClick } from '@/utils';
import { LiaWindowClose } from 'react-icons/lia';
import { auth } from '@/firebase';
import { signOut } from 'firebase/auth';

interface IsMobileAccessPros {
    onclick: () => void;
}

const IsMobileAccess: React.FC<IsMobileAccessPros> = ({
    onclick
}) => {
    const { showMenu } = useContext(GlobalContext) || {}
    const [showToggle, setShowToggle] = useState(false);
    const router = useRouter()
    const { isAuthUser, setIsAuthUser, setUser, user } = useContext(GlobalContext) || {}

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
        await signOut(auth)
        Cookies.remove("token")
        localStorage.clear()
        router.push("/")
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
                        {isAuthUser ? (
                            <ul className="space-y-2 list-none whitespace-nowrap">
                                <li className="hover:bg-slate-200 hover:text-primary-blue-cus">
                                    <button className="
                                       block 
                                       cursor-pointer 
                                       px-4 
                                       py-2
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
                                   "
                                        type="button"
                                        onClick={handleLogout}
                                    >
                                        Đăng xuất
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="space-y-2 list-none whitespace-nowrap">
                                {beforeNavUser.map((item, index) => (
                                    <li className="hover:bg-slate-200 hover:text-primary-blue-cus" key={index}>
                                        <button className="
                                            block 
                                            cursor-pointer 
                                            px-4 
                                            py-2
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
                                <Link href="/user/setting-profile">
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
                                justify-center
                                cursor-pointer
                            "
                        >
                            {showMenu ? (
                                <LiaWindowClose size={30} />
                            ) : (

                                <BiMenu size={30} />
                            )}
                        </div>
                    </div>
                </button>
            </li>
        </ul>
    )
}

export default IsMobileAccess