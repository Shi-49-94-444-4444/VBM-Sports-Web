import React from 'react';
import Container from '../../Container';

const QuickBannerImage = () => {
    return (
        <div 
            className="
                relative
                bg-cover
                bg-no-repeat
                bg-center
                w-full 
                h-screen
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
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default QuickBannerImage;
