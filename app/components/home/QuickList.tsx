"use client"

import { useEffect, useState } from "react";
import { Container, ProductOther } from "../providers";
import { getListProductService } from "@/services/product";
import { listItems } from "@/utils";
import { Product } from "@/types";

const QuickList = () => {
    const [listProduct, setListProduct] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getListProductService();
                setListProduct(products);
                console.log(products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    console.log("listProduct", listProduct);

    if (listProduct === undefined || listProduct.length === 0 || listProduct.length === null) { 
        return <div>Loading...</div>
    }

    const sliceItems = listProduct.slice(0, 12)

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
        </div>
    );
};

export default QuickList;
