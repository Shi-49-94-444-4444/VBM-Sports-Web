"use client"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import UserOther from './UserOther';
import { ListUser } from '@/types';
import { AxiosClient } from '@/services';
import useSWR from 'swr';
import { useContext } from 'react';
import { GlobalContext } from '@/contexts';
import { LoadingFullScreen } from '../../loader';
import { FaSadCry } from 'react-icons/fa';

SwiperCore.use([Pagination]);

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const UserCarousel = () => {
    const { user } = useContext(GlobalContext) || {}
    const { data: listUser, error } = useSWR<ListUser[]>('/api/users/GetListUser', fetcher)

    const isLoading = !error && !listUser

    if (isLoading) {
        return <LoadingFullScreen loading={isLoading} />
    }

    if (error) {
        return (
            <div className="relative flex flex-col gap-5 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Đã xảy ra lỗi khi tải danh sách người dùng - error 500</p>
                <FaSadCry size={100} />
            </div>
        )
    }

    if (listUser && listUser.length === 0) {
        return (
            <div className="relative flex flex-col gap-5 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Không tìm thấy danh sách người dùng</p>
                <FaSadCry size={100} />
            </div>
        )
    }

    if (user) {
        listUser?.filter(user => user.id?.toString() !== user.id?.toString())
    } else {
        listUser
    }

    const sliceItems = listUser && listUser.length > 0 ? listUser.slice(0, 12) : []

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
                        totalRate={item.totalRate}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-20" />
        </Swiper>
    );
};

export default UserCarousel
