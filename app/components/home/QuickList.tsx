"use client"

import { FaSadCry } from "react-icons/fa";
import { Container, LoadingFullScreen, ProductOther } from "../providers";
import { ListProduct } from "@/types";
import { useContext } from "react";
import { GlobalContext } from "@/contexts";
import { AxiosClient } from "@/services";
import useSWR from 'swr';

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const QuickList = () => {
    const { user } = useContext(GlobalContext) || {}

    const { data: listProduct, error, isLoading } = useSWR<ListProduct>(user ? `/api/posts/user/${user.id}/suggestion` : `/api/posts/GetListPost`, fetcher)

    if (isLoading) {
        return <LoadingFullScreen loading={isLoading} />
    }

    if (listProduct && listProduct.data.length < 0) {
        return (
            <div className="relative flex flex-col gap-5 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Không tìm thấy danh sách sản phẩm</p>
                <FaSadCry size={100} />
            </div>
        )
    }

    if (error) {
        return (
            <div className="relative flex flex-col gap-5 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Đã xảy ra lỗi khi tải danh sách sản phẩm - error 500</p>
                <FaSadCry size={100} />
            </div>
        )
    }

    const sliceItems = listProduct && listProduct.data.length > 0 ? listProduct.data.slice(0, 12) : []

    return (
        <div className="relative py-10">
            <Container>
                <div className="
                        grid
                        xl:grid-cols-4
                        lg:grid-cols-3
                        md:grid-cols-2
                        grid-cols-1
                        gap-2
                        transition-all
                        duration-500
                    "
                >
                    {sliceItems.map((items, index) => (
                        <ProductOther
                            key={items.id || items.idPost || index}
                            id={items.id}
                            idPost={items.idPost}
                            title={items.title}
                            idUserToNavigation={items.idUserToNavigation}
                            addressSlot={items.addressSlot}
                            contentPost={items.contentPost}
                            days={items.days}
                            endTime={items.endTime}
                            imgUrl={items.imgUrl}
                            quantitySlot={items.quantitySlot}
                            startTime={items.startTime}
                            priceSlot={items.priceSlot}
                            slots={items.slots}
                            fullName={items.fullName}
                            userImgUrl={items.userImgUrl}
                            price={items.price}
                            highlightUrl={items.highlightUrl}
                            flagTooltip
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default QuickList;
