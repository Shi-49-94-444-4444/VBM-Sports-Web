import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css';

import { listItems } from '@/app/constants';
import ProductItemOther from './ProductItemOther';

SwiperCore.use([Pagination]);

const ProductCarousel = () => {
    return (
        <Swiper
            spaceBetween={10} 
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 1, 
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
                1280: {
                    slidesPerView: 4,
                },
            }}
        >
            {listItems.map((item) => (
                <SwiperSlide key={item.id}>
                    <ProductItemOther
                        id={item.id}
                        src={item.src}
                        title={item.title}
                        description={item.description}
                        timeOpen={item.timeOpen}
                        timeClose={item.timeClose}
                        slot={item.slot}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-20"/>
        </Swiper>
    );
};

export default ProductCarousel;
