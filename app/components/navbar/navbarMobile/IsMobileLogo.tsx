import Image from "next/image"
import { useRouter } from "next/router"

const IsMobileLogo = () => {
    const router = useRouter();

    return (
        <div className="
                flex 
                items-center 
                pt-1 
                pr-1 
                pb-1
            "
        >
            <div className="flex">
                <Image
                    onClick={() => router.push('/')}
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
            </div>
        </div>
    )
}

export default IsMobileLogo