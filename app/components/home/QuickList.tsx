"use client"

import { useContext, useEffect, useState } from "react";
import { Container, LoadingFullScreen, ProductOther } from "../providers";
import { getListProductService } from "@/services/product";
import { ListProduct } from "@/types";
import { GlobalContext } from "@/contexts";

const QuickList = () => {
    const [listProduct, setListProduct] = useState<ListProduct[]>([])
    const { isLoading, setIsLoading } = useContext(GlobalContext) || {}

    useEffect(() => {
        if (setIsLoading) setIsLoading(true)
        const fetchProducts = async () => {
            try {
                const products = await getListProductService();
                setListProduct(products);
                console.log(products);
                if (setIsLoading) setIsLoading(false)
            } catch (error) {
                console.log(error);
                if (setIsLoading) setIsLoading(false)
            }
        };

        fetchProducts();
    }, [setIsLoading]);

    // console.log("listProduct", listProduct);

    if (!listProduct) {
        return <LoadingFullScreen loading={isLoading ?? true} />
    } 

    const sliceItems = listProduct.slice(0, 12)

    return (
        <div className="relative py-10">
            {isLoading ? (
                <LoadingFullScreen loading={isLoading ?? true} />
            ) : (
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

                        {sliceItems?.map((items) => (
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
                            />
                        ))}
                    </div>
                </Container>
            )}
        </div>
    );
};

export default QuickList;
