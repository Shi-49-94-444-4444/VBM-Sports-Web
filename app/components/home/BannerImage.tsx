'use client'

import Image from 'next/image';
import { images } from '@/app/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../../styles/swiper-custom.css'

SwiperCore.use([Autoplay, Pagination, Navigation]);

const BannerImage = () => {
    return (
        <div className="
                relative 
                w-[700px] 
                h-[400px]
            "
        >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="
                                relative 
                                w-[600px] 
                                h-[400px] 
                                border-[10px]
                            "
                        >
                            <Image
                                src={image}
                                alt="Banner"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerImage;
