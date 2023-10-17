"use client"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import ImageItemOther from './ImageOther';
import { ProductDetailContent } from '@/types';

SwiperCore.use([Pagination]);

const ImageCarousel: React.FC<ProductDetailContent> = ({
    imgUrl
}) => {
    const images = Array.isArray(imgUrl) ? imgUrl : (imgUrl ? [imgUrl] : []);

    return (
        <Swiper
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
            className="h-full rounded-lg"
        >
            {images.length > 0 ?
                (images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ImageItemOther
                            src={item}
                        />
                    </SwiperSlide>
                ))) : (
                    <SwiperSlide key="1">
                        <ImageItemOther
                            src={images.toString()}
                        />
                    </SwiperSlide>
                )}
            <div className="mt-20" />
        </Swiper>
    );
};

export default ImageCarousel
