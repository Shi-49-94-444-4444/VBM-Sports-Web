"use client"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import ProductOther from './ProductOther';
import { ListProduct } from '@/types';
import { AxiosClient } from '@/services';
import useSWR from 'swr';
import { LoadingFullScreen } from '../../loader';
import { FaSadCry } from 'react-icons/fa';

SwiperCore.use([Pagination]);

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const ProductCarousel = () => {
    const { data: listProduct, error } = useSWR<ListProduct>('/api/posts/GetListPost', fetcher)

    const isLoading = !error && !listProduct

    if (isLoading) {
        return <LoadingFullScreen loading={isLoading} />
    }

    if (error) {
        return (
            <div className="relative flex flex-col gap-5 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Đã xảy ra lỗi khi tải danh sách sản phẩm - error 500</p>
                <FaSadCry size={100} />
            </div>
        )
    }

    if (listProduct && listProduct.data && listProduct.data.length === 0) {
        return (
            <div className="relative flex flex-col gap-5 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Không tìm thấy danh sách sản phẩm</p>
                <FaSadCry size={100} />
            </div>
        )
    }

    const slicedItems = listProduct && listProduct.data && listProduct.data.length > 0 ? listProduct.data.slice(0, 16) : []

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
                    <ProductOther
                        id={item.id}
                        idUserToNavigation={item.idUserToNavigation}
                        addressSlot={item.addressSlot}
                        contentPost={item.contentPost}
                        days={item.days}
                        endTime={item.endTime}
                        imgUrl={item.imgUrl}
                        quantitySlot={item.quantitySlot}
                        startTime={item.startTime}
                        title={item.title}
                    />
                </SwiperSlide>
            ))}
            <div className="mt-20" />
        </Swiper>
    );
};

export default ProductCarousel
