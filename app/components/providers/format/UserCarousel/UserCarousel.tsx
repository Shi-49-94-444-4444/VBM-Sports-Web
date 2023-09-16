import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css';

import { listUser } from '@/constant';
import UserOther from './UserOther';

SwiperCore.use([Pagination]);

const UserCarousel = () => {
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
            {listUser.map((item) => (
                <SwiperSlide key={item.id}>
                    <UserOther
                        id={item.id}
                        src={item.src}
                        name={item.name}
                        description={item.description}
                        rating={item.rating}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-20" />
        </Swiper>
    );
};

export default UserCarousel
