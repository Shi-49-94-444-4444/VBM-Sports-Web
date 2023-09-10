import { Container } from "@/app/components";
import Footer from "@/app/components/Footer";
import { BannerBadminton } from "@/app/components/badminton";
import Advertisement from "@/app/components/badminton/listProduct/Advertisement";
import ProductFilter from "@/app/components/badminton/listProduct/ProductFilter";
import ProductItems from "@/app/components/badminton/listProduct/ProductItems";
import { listItems } from "@/app/constants";
import Layout from '@/app/layout';

const listBadminton = () => {
    return (
        <Layout>
            <BannerBadminton />
            <Container>
                <div className="py-10 text-center">
                    <h1 className="uppercase text-3xl font-semibold">Các sân cầu lông</h1>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <ProductFilter />
                    <ProductItems listItem={listItems} />
                </div>
            </Container>
            <Advertisement />
            <Footer />
        </Layout>
    )
}

export default listBadminton;