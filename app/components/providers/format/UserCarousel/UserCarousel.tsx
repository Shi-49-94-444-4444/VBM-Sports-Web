import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css';

import { listUser } from '@/constant';
import UserOther from './UserOther';

SwiperCore.use([Pagination]);

const UserCarousel = () => {
    const sliceItems = listUser.slice(0,12)

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
            {sliceItems.map((item) => (
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
