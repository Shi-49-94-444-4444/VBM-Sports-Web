"use client"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import UserOther from './UserOther';
import { useEffect, useState } from 'react';
import { ListUser } from '@/types';
import { getListUserService } from '@/services';
import Cookies from 'js-cookie';

SwiperCore.use([Pagination]);

const UserCarousel = () => {
    const [listUser, setListUser] = useState<ListUser[]>([])

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getListUserService();
                const userID = Cookies.get("userID")
                if (userID) {
                    const filterUser = users.filter((user: ListUser) => user.id?.toString() !== userID)
                    setListUser(filterUser)
                } else {
                    setListUser(users);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchUsers();
    }, []);

    const sliceItems = listUser.slice(0, 12)

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
                        imgUrl={item.imgUrl}
                        userName={item.userName}
                        sortProfile={item.sortProfile}
                        rating={item.rating}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-20" />
        </Swiper>
    );
};

export default UserCarousel
