'use client'

import { FormatHomePageProps } from "@/types"
import Link from "next/link"
import { Container } from ".."

const FormatHomePage: React.FC<FormatHomePageProps> = ({
    title,
    link
}) => {
    return (
        <div className="pt-10">
            <Container>
                <div className="
                        flex 
                        flex-row 
                        justify-between 
                        items-center
                        transition
                        duration-300
                    "
                >
                    <h1 className="
                            font-semibold 
                            lg:text-3xl
                            md:text-2xl
                            text-xl
                            uppercase
                            text-center
                            transition
                            duration-300
                        "
                    >
                        {title}
                    </h1>
                    <div className="cursor-pointer">
                        <Link href={link}>
                            Xem tất cả {">>>"}
                        </Link>
                    </div>
                </div>
                <div className="border-b-4 border-solid"></div>
            </Container>
        </div>
    )
}

export default FormatHomePage