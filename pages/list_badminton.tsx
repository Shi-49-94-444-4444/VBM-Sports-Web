import { listItems } from "@/constant";
import Layout from '@/app/layout';
import { 
    BannerBadminton, 
    Container, Footer, 
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
                <div className="grid grid-cols-4 gap-5">
                    <ProductFilter />
                    <ProductItems listItem={listItems} />
                </div>
            </Container>
            <Advertisement />
            <Footer />
        </Layout>
    )
}

export default ListBadminton;