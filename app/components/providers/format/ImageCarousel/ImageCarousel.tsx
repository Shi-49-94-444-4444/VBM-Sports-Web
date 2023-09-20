import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import ImageItemOther from './ImageItemOther';
import { Product } from '@/types';

SwiperCore.use([Pagination]);

const ImageCarousel: React.FC<Product> = ({
    image
}) => {
    return (
        <Swiper
            pagination={{ clickable: true }}
            loop={true}
            slidesPerView={1}
            className="h-full rounded-lg"
        >
            {image && image.map((item) => (
                <SwiperSlide key={item.id}>
                    <ImageItemOther
                        id={item.id}
                        src={item.src}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-20" />
        </Swiper>
    );
};

export default ImageCarousel
