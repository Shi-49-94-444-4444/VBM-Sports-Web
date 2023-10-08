"use client"

import { useRouter } from "next/router"
import Layout from '@/app/layout';
import {
    Container,
    ProductContent,
    ProductUserPost,
    ProductOtherExtra
} from "@/app/components";
import { getProductService } from "@/services/product";
import { useEffect, useState } from "react";
import { Product } from "@/types";

const DetailBadminton = () => {
    const router = useRouter()
    const { id } = router.query
    const [selectItem, setSelectItem] = useState<Product>()

    useEffect(() => {
        if (!id || Array.isArray(id)) {
            console.log(id);
            return;
        }

        const fetchProducts = async () => {
            try {
                const products = await getProductService(id);
                setSelectItem(products);
                console.log("Product", products);
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, [id]);

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>
    }

    return (
        <Layout>
            <Container>
                <ProductContent
                    id={selectItem.id}
                    imgUrl={selectItem.imgUrl}
                    days={selectItem.days}
                    startTime={selectItem.startTime}
                    endTime={selectItem.endTime}
                />
                <ProductUserPost
                    id={selectItem.id}
                    title={selectItem.title}
                    priceSlot={selectItem.priceSlot}
                    contentPost={selectItem.contentPost}
                    imgUrlUser={selectItem.imgUrlUser}
                    sortProfile={selectItem.sortProfile}
                />
                <ProductOtherExtra />
            </Container>
        </Layout>
    )
}

export default DetailBadminton