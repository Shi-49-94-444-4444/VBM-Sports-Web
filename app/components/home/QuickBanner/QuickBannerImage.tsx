import React from 'react';
import Container from '../../Container';

const QuickBannerImage = () => {
    return (
        <div className="
                w-full 
                xl:h-[600px] 
                md:h-[500px] 
                flex 
                items-center 
                transition-all
                duration-300
            "
        >
            <div
                className="
                    relative
                    bg-contain
                    bg-no-repeat
                    bg-center
                    w-full 
                    h-screen
                    flex
                    items-center
                    transition-all
                    duration-300
                "
                style={{
                    backgroundImage: "url('images/quickbanner.png')",
                }}>
                <Container>
                    <div className="relative">
                        <div className="flex flex-row">
                            <div className="
                                    flex 
                                    flex-col 
                                    text-white 
                                    gap-5 
                                    justify-center
                                "
                            >
                                <h1 className="
                                        xl:text-4xl 
                                        lg:text-3xl
                                        md:text-2xl
                                        text-xl
                                        font-bold 
                                        uppercase
                                        transition-all
                                        duration-300
                                    "
                                >
                                    Vợt cầu lông
                                </h1>
                                <h2 className="
                                        xl:text-3xl 
                                        lg:text-2xl
                                        md:text-xl
                                        text-lg
                                        font-medium
                                        transition-all
                                        duration-300
                                    "
                                >
                                    mua ngay giảm{' '}
                                    <span className="line-through">
                                        100.000đ
                                    </span>
                                </h2>
                                <h2 className="
                                        xl:text-3xl 
                                        lg:text-2xl
                                        md:text-xl
                                        text-lg
                                        font-medium
                                        transition-all
                                        duration-300
                                    "
                                >
                                    bây giờ chỉ còn{' '}
                                    <span className="text-red-600">
                                        450.000đ
                                    </span>
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
                                            bg-navbar-cus
                                            rounded-full
                                            transition-all
                                            duration-300
                                        "
                                    >
                                        Mua ngay
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default QuickBannerImage;
