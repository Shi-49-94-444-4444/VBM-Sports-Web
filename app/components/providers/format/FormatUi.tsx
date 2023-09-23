import Link from "next/link"
import Background from "./Background"
import { IoIosArrowRoundBack } from "react-icons/io"
import { FormatUIProps } from "@/types"
import ClientOnly from "../../ClientOnly"

const FormatUI: React.FC<FormatUIProps> = ({
    src,
    title,
    subTitle,
    subBody,
    titleButton,
    body,
    footer,
    onClick
}) => {
    return (
        <ClientOnly>
            <Background src={src}>
                <div className="
                        relative 
                        w-auto 
                        h-screen 
                        px-10
                        flex 
                        items-center 
                        justify-center
                        transition
                        duration-500
                    "
                >
                    <div className="
                            absolute 
                            top-0 
                            left-0 
                            p-8
                            md:block
                            hidden
                        "
                    >
                        <div className="
                                flex 
                                flex-row 
                                items-center 
                                space-x-1 
                                cursor-pointer
                                 
                            "
                        >
                            <Link href="./" className="text-white  ">
                                <IoIosArrowRoundBack size={40} />
                            </Link>
                            <div className="font-normal text-white">
                                Back
                            </div>
                        </div>
                    </div>
                    <div className="
                            relative 
                            bg-white 
                            bg-opacity-20 
                            inset-0
                            rounded-xl
                            p-8
                            w-[32rem]
                        "
                    >
                        <div className="flex flex-col gap-6">
                            {title && (
                                <div className="flex flex-row justify-between">
                                    <section className="
                                            text-secondary-blue-cus
                                            text-3xl 
                                            font-semibold 
                                            py-2
                                            space-y-2
                                        "
                                    >
                                        <h1>
                                            {title}
                                        </h1>
                                        {subTitle && (
                                            <p className="text-xl font-normal text-gray-400">
                                                {subTitle}
                                            </p>
                                        )}
                                    </section>
                                </div>
                            )}
                            <div className="absolute top-3 right-6 md:hidden">
                                <Link href={'./'} className="text-4xl text-white font-semibold">&times;</Link>
                            </div>
                            <div className="relative">
                                {body}
                            </div>
                            {titleButton && (
                                <div className="relative">
                                    <button className="
                                            w-full 
                                            bg-primary-blue-cus 
                                            text-white 
                                            font-semibold 
                                            text-lg 
                                            rounded-xl 
                                            py-3
                                             
                                        "
                                        onClick={onClick}
                                    >
                                        {titleButton}
                                    </button>
                                </div>
                            )}
                            {subBody && (
                                <div className="relative">
                                    {subBody}
                                </div>
                            )}
                            {footer && (
                                <div className="relative">
                                    {footer}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Background>
        </ClientOnly>
    )
}

export default FormatUI