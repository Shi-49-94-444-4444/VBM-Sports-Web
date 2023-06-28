'use client'

import Container from "../Container"

interface FormatHomePageProps {
    title: string;
    subTitle?: string;
}

const FormatHomePage: React.FC<FormatHomePageProps> = ({
    title,
    subTitle
}) => {
    return (
        <div className="pt-16 my-4">
            <Container>
                <div className="
                        flex 
                        flex-row 
                        justify-between 
                        items-center
                    "
                >
                    <div className="
                            w-1/4 
                            h-2 
                            bg-orange-cus
                        "
                    ></div>
                    <div className="
                            flex
                            flex-col
                            justify-between 
                            items-center
                            gap-3
                        "
                    >
                        <h1 className="
                            font-bold 
                            text-4xl 
                            uppercase
                            text-center
                            "
                        >
                            {title}
                        </h1>
                        <h2 className="
                            font-medium
                            text-2xl
                            "
                        >
                            {subTitle}
                        </h2>
                    </div>
                    <div className="
                            w-1/4 
                            h-2 
                            bg-orange-cus
                        "
                    ></div>
                </div>
            </Container>
        </div>
    )
}

export default FormatHomePage