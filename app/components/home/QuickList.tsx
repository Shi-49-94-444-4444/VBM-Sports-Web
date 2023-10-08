"use client"

import { useEffect, useState } from "react";
import { Container, ProductOther } from "../providers";
import { getListProductService } from "@/services/product";
import { listItems } from "@/utils";
import { ListProduct, Product } from "@/types";

const QuickList = () => {
    const [listProduct, setListProduct] = useState<ListProduct>()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getListProductService();
                const dataNeeded = products.map((product: Product) => {
                    const { id, title, description, slot, image, timeClose, timeOpen } = product

                    return { id, title, description, slot, image, timeClose, timeOpen }
                })
                setListProduct(dataNeeded);
                console.log(products);

            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    console.log("listProduct", listProduct);

    const sliceItems = listItems.slice(0, 12)

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
                    {sliceItems.map((items) => (
                        <ProductOther
                            key={items.id}
                            id={items.id}
                            title={items.title}
                            description={items.description}
                            slot={items.slot}
                            image={items.image}
                            timeClose={items.timeClose}
                            timeOpen={items.timeOpen}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default QuickList;
