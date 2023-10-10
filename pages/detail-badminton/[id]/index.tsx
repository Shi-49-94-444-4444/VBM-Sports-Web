import Layout from '@/app/layout';
import {
    Container,
    ProductContent,
    ProductUserPost,
    ProductOtherExtra,
} from "@/app/components";
import { getProductService } from "@/services/product";
import { ProductDetailContent } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;

    if (!id || Array.isArray(id)) {
        return {
            notFound: true,
        };
    }

    try {
        const Product = await getProductService(id)
        return {
            props: {
                Product,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
};

const DetailBadminton = ({ Product }: { Product: ProductDetailContent }) => {
    return (
        <Layout>
            <Container>
                <ProductContent
                    id={Product.id}
                    imgUrl={Product.imgUrl}
                    days={Product.days}
                    startTime={Product.startTime}
                    endTime={Product.endTime}
                    addressSlot={Product.addressSlot}
                    categorySlot={Product.categorySlot}
                    levelSlot={Product.levelSlot}
                    quantitySlot={Product.quantitySlot}
                />
                <ProductUserPost
                    id={Product.id}
                    title={Product.title}
                    priceSlot={Product.priceSlot}
                    contentPost={Product.contentPost}
                    imgUrlUser={Product.imgUrlUser}
                    sortProfile={Product.sortProfile}
                    fullName={Product.fullName}
                />
                <ProductOtherExtra />
            </Container>
        </Layout>
    )
}

export default DetailBadminton