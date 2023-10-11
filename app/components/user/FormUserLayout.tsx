"use client"

import { IoIosArrowRoundBack } from "react-icons/io"
import { FormatUIProps } from "@/types"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { useRouter } from "next/router"
import ClientOnly from "../ClientOnly"
import { Background } from "../providers"

const FormatUI: React.FC<FormatUIProps> = ({
    src,
    title,
    subTitle,
    subBody,
    body,
    footer,
}) => {
    const { setUser, setIsAuthUser, setIsRouterForgotPassword } = useContext(GlobalContext) || {}
    const router = useRouter()

    const handleBack = () => {
        if (setUser && setIsAuthUser && setIsRouterForgotPassword) {
            setUser(null)
            setIsAuthUser(false)
            setIsRouterForgotPassword(false)
        }
        localStorage.clear()
        router.push("/")
    }

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
                        <button className="
                                flex 
                                flex-row 
                                items-center 
                                space-x-1 
                                cursor-pointer
                                text-white
                            "
                            type="button"
                            onClick={handleBack}
                        >
                            <span>
                                <IoIosArrowRoundBack size={40} />
                            </span>
                            <span className="font-semibold">
                                Quay lại
                            </span>
                        </button>
                    </div>
                    <div className="
                            relative 
                            bg-white 
                            bg-opacity-20 
                            inset-0
                            rounded-xl
                            py-2
                            px-8
                            w-[32rem]
                        "
                    >
                        <div className="flex flex-col gap-3">
                            {title && (
                                <div className="flex flex-row justify-between">
                                    <section className="
                                            text-primary-blue-cus
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
                            <button className="absolute top-3 right-6 md:hidden" type="button" onClick={handleBack}>
                                <span className="text-4xl text-white font-semibold">&times;</span>
                            </button>
                            <div className="relative">
                                {body}
                            </div>
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