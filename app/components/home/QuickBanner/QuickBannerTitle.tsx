import { QuickBannerTitle } from "@/types"
import { Container } from "../../providers"

const QuickBannerTitle: React.FC<QuickBannerTitle> = ({
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
                        transition
                        duration-300
                    "
                >
                    <div className="
                            w-1/4 
                            h-1 
                            bg-orange-cus
                            hidden
                            lg:block
                        "
                    ></div>
                    <div className="
                            flex
                            flex-col
                            justify-between 
                            items-center
                            gap-3
                            w-full
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
                        <h2 className="
                            font-medium
                            lg:text-2xl
                            md:text-xl
                            text-lg
                            "
                        >
                            {subTitle}
                        </h2>
                    </div>
                    <div className="
                            w-1/4 
                            h-1
                            bg-orange-cus
                            hidden
                            lg:block
                        "
                    ></div>
                </div>
            </Container>
        </div>
    )
}

export default QuickBannerTitle