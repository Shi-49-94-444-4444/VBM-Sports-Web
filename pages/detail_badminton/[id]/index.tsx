import { useRouter } from "next/router"
import Layout from '@/app/layout';
import { Container, Footer } from "@/app/components";
import { listItems } from "@/app/constants";
import ProductContent from "@/app/components/badminton/detailProduct/ProductContent";
import ProductDetail from "@/app/components/badminton/detailProduct/ProductDetail";
import ProductOtherExtra from "@/app/components/badminton/detailProduct/ProductOtherExtra";

const DetailBadminton = () => {
    const router = useRouter()
    const { id } = router.query

    const numericId = typeof id === "string" ? parseInt(id, 10) : id;
    const selectItem = listItems.find(items => items.id === numericId)

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <Layout>
            <Container>
                <ProductContent src={selectItem.src}/>
                <ProductDetail
                    title={selectItem.title}
                    description={selectItem.description}
                    price={selectItem.price}
                    timeOpen={selectItem.timeOpen}
                    timeClose={selectItem.timeClose}
                    slot={selectItem.slot}
                />
                <ProductOtherExtra />
            </Container>
            <Footer />
        </Layout>
    )
}

export default DetailBadminton