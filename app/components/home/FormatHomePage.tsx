'use client'

import { FormatHomePageProps } from "@/types"
import Container from "../Container"

const FormatHomePage: React.FC<FormatHomePageProps> = ({
    title,
}) => {
    return (
        <div className="pt-16 my-4">
            <Container>
                <div className="space-y-4">
                    <div className="
                        flex 
                        flex-row 
                        justify-between 
                        items-center
                        "
                    >
                        <h1 className="
                                font-semibold 
                                text-3xl 
                                uppercase
                                text-center
                                "
                        >
                            {title}
                        </h1>
                        <div className="cursor-pointer">
                            Xem tất cả {">>>"}
                        </div>
                    </div>
                    <div className="border-b-4 border-solid"></div>
                </div>
            </Container>
        </div>
    )
}

export default FormatHomePage