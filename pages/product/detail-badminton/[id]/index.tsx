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
import Custom404 from '@/pages/404';

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
        const Product = await getProductService(id)
        if (!Product) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                Product,
                postId: id.toString()
            },
            revalidate: 60
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

const DetailBadmintonPage = ({ Product, internalError, postId }: { Product: ProductDetailContent, internalError?: boolean, postId: string }) => {
    if (!Product) {
        return <Custom404 />
    }

    if (internalError) {
        return <Custom500 />
    }

    return (
        <Layout>
            <Container>
                <ProductContent
                    id={postId}
                    imgUrl={Product.imgUrl}
                    days={Product.days}
                    startTime={Product.startTime}
                    endTime={Product.endTime}
                    addressSlot={Product.addressSlot}
                    categorySlot={Product.categorySlot}
                    levelSlot={Product.levelSlot}
                    availableSlot={Product.availableSlot}
                />
                <ProductUserPost
                    id={postId}
                    title={Product.title}
                    priceSlot={Product.priceSlot}
                    contentPost={Product.contentPost}
                    imgUrlUser={Product.imgUrlUser}
                    sortProfile={Product.sortProfile}
                    fullName={Product.fullName}
                    totalRate={Product.totalRate}
                    userId={Product.userId}
                />
                <ProductOtherExtra />
            </Container>
        </Layout>
    )
}

export default DetailBadmintonPage;
