import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import { listItems } from '@/utils';
import ProductItemOther from './ProductItemOther';

SwiperCore.use([Pagination]);

const ProductCarousel = () => {
    const slicedItems = listItems.slice(0, 16);

    return (
        <Swiper
            spaceBetween={10} 
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
                640: {
                    slidesPerView: 1, 
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                },
                1280: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
            }}
        >
            {slicedItems.map((item) => (
                <SwiperSlide key={item.id}>
                    <ProductItemOther
                        id={item.id}
                        image={item.image}
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

export default ProductCarousel
