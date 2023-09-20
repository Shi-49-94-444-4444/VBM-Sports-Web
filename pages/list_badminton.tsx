import { listItems } from "@/utils";
import Layout from '@/app/layout';
import {
    BannerBadminton,
    Container,
    ProductFilter,
    ProductItems
} from "@/app/components";
import Advertisement from "@/app/components/providers/format/Advertisement";

const ListBadminton = () => {
    return (
        <Layout>
            <BannerBadminton />
            <Container>
                <div className="py-10 text-center">
                    <h1 className="uppercase text-3xl font-semibold">Các sân cầu lông</h1>
                </div>
                <div className="grid lg:grid-cols-4 col-span-1 gap-5">
                    <div className="lg:col-span-1 flex flex-col gap-3">
                        <ProductFilter />
                    </div>
                    <div className="lg:col-span-3 col-span-1 h-auto w-full relative">
                        <ProductItems listItem={listItems} />
                    </div>
                </div>
            </Container>
            <Advertisement />
        </Layout>
    )
}

export default ListBadminton;