"use client"

import Image from "next/image"
import { useRouter } from "next/router"

const Logo = () => {
    const router = useRouter();

    return (
        <div className="
                    flex
                    items-center
                    py-4
                    pr-4
                "
        >
            <button className="hidden xl:block" type="button" onClick={() => router.push('/')}>
                <Image
                    alt="Logo"
                    className="
                        cursor-pointer 
                        self-center 
                        fill-transparent
                        object-cover
                    "
                    height="150"
                    width="150"
                    src="/images/logo_1.png"
                />
            </button>
            <button className="hidden xl:hidden lg:block" type="button" onClick={() => router.push('/')}>
                <Image
                    alt="Logo"
                    className="
                        cursor-pointer 
                        self-center 
                        fill-transparent
                        object-cover
                    "
                    height="20"
                    width="20"
                    src="/images/Vector.png"
                />
            </button>
        </div>
    )
}

export default Logo