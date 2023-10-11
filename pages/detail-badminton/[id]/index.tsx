import Layout from '@/app/layout';
import {
    Container,
    ProductContent,
    ProductUserPost,
    ProductOtherExtra,
} from "@/app/components";
import { getListProductService, getProductService } from "@/services/product";
import { ProductDetailContent } from "@/types";
import { GetStaticPaths, GetStaticProps } from "next";
import Custom500 from '@/pages/500';

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const products = await getListProductService();
        const paths = products.map((product: ProductDetailContent) => ({
            params: { id: product?.id?.toString() },
        }));

        return { paths, fallback: false };
    } catch (error) {
        console.log(error);
        return { paths: [], fallback: false };
    }
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id

    if (!id || Array.isArray(id)) {
        return {
            notFound: true,
        }
    }

    try {
        const res = await getProductService(id)
        if (res && res.status === 200) {
            const Product = res.data
            return {
                props: {
                    Product,
                },
                revalidate: 60
            }
        } else if (res && res.status === 404) {
            return {
                notFound: true,
            }
        } else {
            return {
                props: {
                    internalError: true
                }
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                internalError: true
            }
        }
    }
}

const DetailBadmintonPage = ({ Product, internalError }: { Product: ProductDetailContent, internalError?: boolean }) => {
    if (internalError || !Product) {
        return <Custom500 />
    }

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

export default DetailBadmintonPage;
