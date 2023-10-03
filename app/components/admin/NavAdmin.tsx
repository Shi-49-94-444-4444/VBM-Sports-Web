import Image from "next/image"
import Link from "next/link"

const NavAdmin = () => {
    return (
        <div className="relative w-full h-20 flex items-center justify-center bg-white shadow-sm">
            <Link href="/admin">
                <section className="flex items-center space-x-2">
                    <Image
                        src="/images/vector.png"
                        alt="logo"
                        width="20"
                        height="20"
                        className="object-cover"
                    />
                    <h1 className="uppercase text-xl font-semibold text-[#343B63]">
                        VNB SPORTS
                    </h1>
                </section>
            </Link>
        </div>
    )
}

export default NavAdmin