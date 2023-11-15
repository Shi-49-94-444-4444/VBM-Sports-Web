import Layout from '@/app/layout';
import {
    Container,
    ProductFilter,
    ProductItems
} from "@/app/components"
import { getListProductService } from '@/services';
import { ListProduct } from '@/types';
import Custom404 from '../404';
import Custom500 from '../500';

export async function getServerSideProps() {
    try {
        const listProduct = await getListProductService()
        if (listProduct.data == null) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                listProduct,
            },
        }
    } catch (error) {
        //console.log(error)
        return {
            props: {
                internalError: true
            }
        }
    }
}

const ListBadmintonPage = ({ listProduct, internalError }: { listProduct: ListProduct, internalError?: boolean }) => {
    if (!listProduct) {
        return <Custom404 />
    }

    if (internalError) {
        return <Custom500 />
    }

    return (
        <Layout>
            <Container>
                <div className="py-10">
                    <div className="grid lg:grid-cols-4 col-span-1 gap-5">
                        <div className="lg:col-span-1 flex flex-col gap-3">
                            <ProductFilter />
                        </div>
                        <div className="lg:col-span-3 col-span-1 h-auto w-full relative">
                            <h1 className="text-3xl font-semibold pb-5 text-gray-600">Bài đăng đặt sân</h1>
                            <ProductItems listItem={listProduct.data} />
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default ListBadmintonPage