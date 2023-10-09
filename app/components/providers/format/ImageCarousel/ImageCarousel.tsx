"use client"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import ImageItemOther from './ImageOther';
import { Product } from '@/types';

SwiperCore.use([Pagination]);

const ImageCarousel: React.FC<Product> = ({
    imgUrl
}) => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
            className="h-full rounded-lg"
        >
            {imgUrl ?  (imgUrl.map((item) => (
                <SwiperSlide key={item.id}>
                    <ImageItemOther
                        id={item.id}
                        src={item.src}
                    />
                </SwiperSlide>
            ))) : (
                <SwiperSlide key="1">
                    <ImageItemOther
                        id="1"
                        src="/images/item_1.jpg"
                    />
                </SwiperSlide>
            )}
            <div className="mt-20" />
        </Swiper>
    );
};

export default ImageCarousel
