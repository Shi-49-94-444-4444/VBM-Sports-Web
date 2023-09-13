'use-client'

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
            <div className="hidden xl:block">
                <Image
                    onClick={() => router.push('/')}
                    alt="Logo"
                    className="
                        cursor-pointer 
                        self-center 
                        fill-transparent
                    "
                    objectFit="cover"
                    objectPosition="center"
                    height="150"
                    width="150"
                    src="/images/logo_1.png"
                />
            </div>
            <div className="hidden xl:hidden lg:block">
                <Image
                    onClick={() => router.push('/')}
                    alt="Logo"
                    className="
                        cursor-pointer 
                        self-center 
                        fill-transparent
                    "
                    objectFit="cover"
                    objectPosition="center"
                    height="20"
                    width="20"
                    src="/images/Vector.png"
                />
            </div>
        </div>
    )
}

export default Logo