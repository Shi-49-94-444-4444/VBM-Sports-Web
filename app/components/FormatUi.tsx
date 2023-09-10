import Link from "next/link"
import Background from "./BackgroundCus"
import ClientOnly from "./ClinetOnly"
import { IoIosArrowRoundBack } from "react-icons/io"
import { FormatUIProps } from "@/types"

const FormatUI: React.FC<FormatUIProps> = ({
    src,
    title,
    subTitle,
    titleButton,
    body,
    footer
}) => {
    return (
        <ClientOnly>
            <Background src={src}>
                <div className="
                        relative 
                        w-auto 
                        h-screen 
                        flex 
                        items-center 
                        justify-center
                    "
                >
                    <div className="absolute top-0 left-0 p-8">
                        <div className="flex flex-row items-center space-x-1 cursor-pointer">
                            <Link href="./" className="text-white">
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
                            p-10
                            w-[38rem]
                        "
                    >
                        <div className="flex flex-col gap-6">
                            <h1 className="
                                    text-navbar-cus 
                                    text-3xl 
                                    font-medium 
                                    py-2
                                "
                            >
                                {title}
                            </h1>
                            <div className="flex flex-col gap-5">
                                {body}
                            </div>
                            <div className="relative">
                                <button className="
                                        w-full 
                                        bg-navbar-cus 
                                        text-white 
                                        font-semibold 
                                        text-lg 
                                        rounded-xl 
                                        py-3
                                    "
                                >
                                    <Link href="#">
                                        {titleButton}
                                    </Link>
                                </button>
                            </div>
                            {subTitle && (
                                <div className="relative">
                                    {subTitle}
                                </div>
                            )}
                            <div className="relative">
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </Background>
        </ClientOnly>
    )
}

export default FormatUI