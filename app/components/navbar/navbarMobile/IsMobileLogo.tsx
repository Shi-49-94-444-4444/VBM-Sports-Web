import Image from "next/image"
import Link from "next/link";

const IsMobileLogo = () => {
    return (
        <div className="
                flex 
                items-center 
                pt-1 
                pr-1 
                pb-1
            "
        >
            <Link href="/" className="flex">
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

export default IsMobileLogo