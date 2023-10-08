"use client"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import ProductOther from './ProductOther';
import { useEffect, useState } from 'react';
import { getListProductService } from '@/services/product';
import { Product } from '@/types';

SwiperCore.use([Pagination]);

const ProductCarousel = () => {
    const [listProduct, setListProduct] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getListProductService();
                const dataNeeded = products.map((product: Product) => {
                    const {
                        id,
                        title,
                        idUserToNavigation,
                        addressSlot,
                        contentPost,
                        days,
                        endTime,
                        imgUrl,
                        priceSlot,
                        quantitySlot,
                        startTime
                    } = product

                    return {
                        id,
                        title,
                        idUserToNavigation,
                        addressSlot,
                        contentPost,
                        days,
                        endTime,
                        imgUrl,
                        priceSlot,
                        quantitySlot,
                        startTime
                    }
                })
                setListProduct(dataNeeded);
                console.log(products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    const slicedItems = listProduct.slice(0, 16);

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
