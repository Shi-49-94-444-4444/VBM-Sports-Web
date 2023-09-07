import { Container } from "@/app/components";
import Footer from "@/app/components/Footer";
import { BannerBadminton } from "@/app/components/badminton";
import ProductItems from "@/app/components/badminton/listProduct/ProductItems";
import { listItems } from "@/app/constants";
import Layout from '@/app/layout';

const listBadminton = () => {
    return (
        <Layout>
            <BannerBadminton />
            <Container>
                <div className="
                        py-10
                        text-center
                    "
                >
                    <h1 className="
                            uppercase
                            text-3xl
                            font-semibold
                        "
                    >
                        Các sân cầu lông
                    </h1>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-1">
                        <h2 className="text-xl">Bộ lọc tìm kiếm</h2>
                    </div>
                    <ProductItems listItem={listItems} />
                </div>
            </Container>
            <Footer />
        </Layout>
    )
}

export default listBadminton;