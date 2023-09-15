import React from 'react';
import { ButtonCus, Container } from '../../providers';

const QuickBannerImage = () => {
    return (
        <div className="
                w-full 
                lg:h-[700px] 
                md:h-[500px]
                sm:h-[300px]
                h-[250px]
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
                                    md:gap-3
                                    gap-1
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
                                        xl:text-2xl 
                                        lg:text-xl
                                        md:text-lg
                                        text-base
                                        font-medium
                                        transition-all
                                        duration-300
                                    "
                                >
                                    mua ngay giảm{' '}
                                    <span className="line-through font-bold">
                                        100.000đ
                                    </span>
                                </h2>
                                <h2 className="
                                        xl:text-2xl 
                                        lg:text-xl
                                        md:text-lg
                                        text-base
                                        font-medium
                                        transition-all
                                        duration-300
                                    "
                                >
                                    bây giờ chỉ còn{' '}
                                    <span className="text-red-600 font-bold">
                                        450.000đ
                                    </span>
                                </h2>
                                <div>
                                    <ButtonCus
                                        title="Mua ngay"
                                        style=" 
                                            xl:text-lg
                                            xl:px-10
                                            lg:text-base 
                                            lg:px-6
                                            lg:py-2
                                            md:px-4
                                            md:py-1
                                            md:text-base
                                        "
                                        onClick={() => {}}
                                    />
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
