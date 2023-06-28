import React from 'react';
import Container from '../Container';
import Image from 'next/image';

const QuickBannerImage = () => {
    return (
        <div className="
              bg-cover 
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
                                    w-[150px] 
                                    h-[450px]
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
                                    w-[120px] 
                                    h-[100px] 
                                    bottom-0 
                                    left-14
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
