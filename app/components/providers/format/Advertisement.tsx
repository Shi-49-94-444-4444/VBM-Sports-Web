import Container from "../form/Container";

const Advertisement = () => {
    return (
        <div className="
                hidden
                md:block
            "
        >
            <div className="
                    w-full 
                    lg:h-[400px] 
                    md:h-[300px]
                    sm:h-[200px]
                    h-[200px]
                    flex 
                    items-center 
                    transition-all
                    duration-300
                    mt-20
                "
            >
                <div
                    className="
                    relative
                    bg-cover
                    bg-no-repeat
                    bg-center
                    w-full 
                    h-full
                    flex
                    items-center
                    transition-all
                    duration-300
                "
                    style={{
                        backgroundImage: "url('images/quickbanner_1.png')",
                    }}>
                    <Container>
                        <div className="relative">
                            <div className="flex flex-row">
                                <div className="
                                    flex 
                                    flex-col 
                                    text-white 
                                    lg:gap-5 
                                    md:gap-3
                                    gap-1
                                    justify-center
                                    w-[60%]
                                "
                                >
                                    <h1 className="
                                        xl:text-2xl 
                                        lg:text-xl
                                        md:text-lg
                                        text-base
                                        font-bold 
                                        uppercase
                                        transition-all
                                        duration-300
                                    "
                                    >
                                        Bạn cần huấn luyện viên ?
                                    </h1>
                                    <h2 className="
                                        xl:text-xl 
                                        lg:text-lg
                                        md:text-base
                                        text-sm
                                        font-medium
                                        transition-all
                                        duration-300
                                    "
                                    >
                                        chúng tôi có thể chỉ cho bạn các động tác sao cho thuần thục nhất
                                    </h2>
                                    <div>
                                        <button className="
                                            uppercase 
                                            font-bold
                                            xl:text-lg
                                            xl:px-10
                                            lg:text-base 
                                            lg:px-6
                                            lg:py-2
                                            md:px-4
                                            md:py-1
                                            md:text-base
                                            text-sm
                                            px-3
                                            bg-red-600
                                            rounded-full
                                            transition-all
                                            duration-300
                                        "
                                        >
                                            Đăng kí ngay
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default Advertisement