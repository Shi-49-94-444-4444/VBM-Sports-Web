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
            <Image
                onClick={() => router.push('/')}
                alt="Logo"
                className="
                    cursor-pointer 
                    self-center 
                    fill-transparent
                "
                height="150"
                width="150"
                src="/images/logo_1.png"
            />
        </div>
    )
}

export default Logo