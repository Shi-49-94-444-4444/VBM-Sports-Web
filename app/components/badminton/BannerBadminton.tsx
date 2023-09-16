import { Container } from "../providers"

const BannerBadminton = () => {
    return (
        <div className="
                hidden
                md:block
            "
        >
            <div className="
                relative
                inset-0
                bg-center 
                bg-cover
                bg-no-repeat
                w-auto
                h-[80vh]
                transition
                duration-300
            "
                style={{
                    backgroundImage: `url(/images/background_1.png)`,
                }}>

                <Container>
                    <div className="
                            flex
                            items-center 
                            transition
                            duration-300
                            mt-20
                            justify-start
                        "
                    >
                        <h1 className="
                                text-white 
                                font-medium 
                                text-2xl
                                w-1/5
                                uppercase
                            "
                        >
                            Chơi cầu lông luôn cần sân chơi để có thể thể hiện tốt nhất
                        </h1>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default BannerBadminton