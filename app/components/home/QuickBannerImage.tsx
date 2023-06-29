import React from 'react';
import Container from '../Container';
import Image from 'next/image';

const QuickBannerImage = () => {
    return (
        <div className="
              bg-contain
              bg-no-repeat
              bg-center
              w-full 
              h-3/4
              mt-10
              flex
              items-center
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
                                    text-4xl 
                                    font-bold 
                                    uppercase
                                "
                            >
                                Vợt cầu lông
                            </h1>
                            <h2 className="text-3xl font-medium">
                                mua ngay giảm{' '}
                                <span className="line-through">
                                    100.000đ
                                </span>
                            </h2>
                            <h2 className="text-3xl font-medium">
                                bây giờ chỉ còn{' '}
                                <span className="text-red-600">
                                    450.000đ
                                </span>
                            </h2>
                            <div>
                                <button className="
                                        text-2xl 
                                        uppercase 
                                        font-bold 
                                        p-2 
                                        bg-red-600 
                                        rounded-lg
                                    "
                                >
                                    Buy now
                                </button>
                            </div>
                        </div>
                        <div className="
                                relative 
                                flex 
                                items-center
                            "
                        >
                            <div className="
                                    relative 
                                    xl:w-[150px] 
                                    xl:h-[450px]
                                    lg:w-[100px] 
                                    lg:h-[350px]
                                "
                            >
                                <Image
                                    src="/images/quickbanner_2.png"
                                    alt="quickbanner"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="
                                    absolute 
                                    bottom-0 
                                    xl:w-[120px] 
                                    xl:h-[100px] 
                                    xl:left-14
                                    lg:w-[100px] 
                                    lg:h-[70px]
                                    lg:left-5
                                "
                            >
                                <Image
                                    src="/images/quickbanner_1.png"
                                    alt="quickbanner"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default QuickBannerImage;
