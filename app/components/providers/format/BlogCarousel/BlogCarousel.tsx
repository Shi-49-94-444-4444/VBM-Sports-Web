import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import { listBlog } from '@/utils';
import BlogItemOther from './BlogOther';

SwiperCore.use([Pagination]);

const BlogCarousel = () => {
    const sliceItems = listBlog.slice(0,8)

    return (
        <Swiper
            spaceBetween={10}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                },
                1024: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1280: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
            }}
        >
            {sliceItems.map((item) => (
                <SwiperSlide key={item.id}>
                    <BlogItemOther
                        id={item.id}
                        src={item.src}
                        description={item.description}
                        title={item.title}
                        date={item.date}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-20" />
        </Swiper>
    );
};

export default BlogCarousel
