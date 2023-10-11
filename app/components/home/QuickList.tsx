"use client"

import { FaSadCry } from "react-icons/fa";
import { Container, LoadingFullScreen, ProductOther } from "../providers";
import { ListProduct } from "@/types";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts";
import { getListProductService, getProductSuggestService } from "@/services/product";

const QuickList = () => {
    const [listProduct, setListProduct] = useState<ListProduct[]>([])
    const { user, setIsLoading, isLoading } = useContext(GlobalContext) || {}

    useEffect(() => {
        if (setIsLoading) setIsLoading(true)
        const fetchProduct = async () => {
            try {
                if (user) {
                    const products = await getProductSuggestService(user?.id ?? "1")
                    setListProduct(products)
                    if (setIsLoading) setIsLoading(false)
                } else {
                    const products = await getListProductService()
                    setListProduct(products)
                    if (setIsLoading) setIsLoading(false)
                }
            } catch (error) {
                console.log(error)
                if (setIsLoading) setIsLoading(false)
            }
        }

        fetchProduct()
    }, [setIsLoading, user])

    const sliceItems = listProduct && listProduct.length > 0 ? listProduct.slice(0, 12) : []

    return (
        <div className="relative py-10">
            {isLoading ? (
                <LoadingFullScreen loading={isLoading} />
            ) : (
                listProduct && listProduct.length > 0 ? (
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
                            {sliceItems.map((items) => (
                                <ProductOther
                                    key={items.id}
                                    id={items.id}
                                    title={items.title}
                                    idUserToNavigation={items.idUserToNavigation}
                                    addressSlot={items.addressSlot}
                                    contentPost={items.contentPost}
                                    days={items.days}
                                    endTime={items.endTime}
                                    imgUrl={items.imgUrl}
                                    quantitySlot={items.quantitySlot}
                                    startTime={items.startTime}
                                    flagTooltip
                                />
                            ))}
                        </div>
                    </Container>
                ) : (
                    <div className="relative flex flex-col gap-5 items-center justify-center h-96 text-primary-blue-cus">
                        <p className="text-3xl font-semibold">Không tìm thấy sản phẩm - Lỗi máy chủ</p>
                        <FaSadCry size={100} />
                    </div>
                ))}
        </div>
    );
};

export default QuickList;
