import Link from "next/link"
import Background from "./BackgroundCus"
import ClientOnly from "./ClinetOnly"
import { IoMdArrowRoundBack } from "react-icons/io"
import FormatUIProps from "@/types/formatUi"

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
            <Background src="/images/background.png">
                <div className="
                        flex 
                        items-stretch 
                        h-screen p-4
                    "
                >
                    <div
                        className="
                            bg-cover
                            bg-no-repeat
                            bg-center
                            w-1/2
                            h-full
                            max-h-screen
                            "
                        style={{
                            backgroundImage: `url(${src})`,
                        }}
                    ></div>
                    <div className="
                            w-1/2 
                            h-full 
                            max-h-screen 
                            flex 
                            bg-form-cus 
                            relative 
                            p-4
                        "
                    >
                        <div className="
                                flex 
                                justify-start 
                                items-center
                            "
                        >
                            <Link 
                                href="./" 
                                className="
                                    text-black 
                                    text-3xl 
                                    absolute 
                                    top-3
                                "
                            >
                                <IoMdArrowRoundBack size={30} />
                            </Link>
                        </div>
                        <div className="
                                flex 
                                flex-col 
                                w-full 
                                lg:px-8 
                                xl:px-20 
                                justify-center 
                                gap-5
                            "
                        >
                            <div className="flex justify-center">
                                <h1 className="
                                        text-black 
                                        text-4xl 
                                        font-extrabold 
                                    "
                                >
                                    {title}
                                </h1>
                            </div>
                            {subTitle}
                            <div className="px-10 space-y-5">
                                {body}
                                <div className="flex justify-center">
                                    <button className="
                                            bg-navbar-cus 
                                            text-white 
                                            uppercase 
                                            w-full 
                                            font-bold 
                                            text-sm 
                                            py-2 
                                            rounded-md
                                        "
                                    >
                                        {titleButton}
                                    </button>
                                </div>
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
            </Background>
        </ClientOnly>
    )
}

export default FormatUI