import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs, Autoplay } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/thumbs';

SwiperCore.use([Thumbs, Autoplay]);

const ThumbGallery: React.FC<{ images: string[] }> = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

    const handleThumbsSwiper = (swiper: SwiperCore) => {
        if (!thumbsSwiper) {
            setThumbsSwiper(swiper);
        }
    };

    return (
        <div>
            <Swiper
                thumbs={{ swiper: thumbsSwiper }}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="
                                relative 
                                transition-all
                                pb-[70%] 
                                duration-300
                                cursor-pointer
                            "
                        >
                            <div className="
                                    absolute 
                                    top-0 
                                    left-0 
                                    w-full 
                                    h-full
                                    transition-all
                                    duration-300
                                "
                            >
                                <Image
                                    src={image}
                                    alt={`Image ${index}`}
                                    className="rounded-lg object-cover"
                                    fill
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={handleThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="pt-4">
                            <div className="
                                    relative 
                                    transition-all
                                    pb-[70%] 
                                    duration-300
                                    cursor-pointer
                                "
                            >
                                <div className="
                                        absolute 
                                        top-0 
                                        left-0 
                                        w-full 
                                        h-full
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <Image
                                        src={image}
                                        alt={`Thumb ${index}`}
                                        className="rounded-lg object-cover"
                                        fill
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ThumbGallery
