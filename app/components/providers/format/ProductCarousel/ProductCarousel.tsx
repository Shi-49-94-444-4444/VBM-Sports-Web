"use client"

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import '@/styles/swiper-product.css'

import ProductOther from './ProductOther';
import { useEffect, useState } from 'react';
import { getListProductService } from '@/services/product';
import { ListProduct } from '@/types';
import Cookies from 'js-cookie';

SwiperCore.use([Pagination]);

const ProductCarousel = () => {
    const [listProduct, setListProduct] = useState<ListProduct[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getListProductService();
                const productID = Cookies.get("productID")
                if (productID) {
                    const filterProduct = products.filter((product: ListProduct) => product.id?.toString() !== productID)
                    setListProduct(filterProduct)
                    console.log(filterProduct)
                } else {
                    setListProduct(products)
                    console.log(products)
                }
            } catch (error) {
                console.log(error)
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
