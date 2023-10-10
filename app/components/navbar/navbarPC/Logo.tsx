import Image from "next/image"
import Link from "next/link";

const Logo = () => {
    return (
        <div className="
                    flex
                    items-center
                    py-4
                    pr-4
                "
        >
            <Link href="/" className="hidden xl:block" >
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
            </Link>
            <Link href="/" className="hidden xl:hidden lg:block">
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
            </Link>
        </div>
    )
}

export default Logo