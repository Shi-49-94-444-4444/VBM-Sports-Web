import { useRouter } from "next/router"
import Layout from '@/app/layout';
import { 
    Container, 
    ProductContent, 
    ProductDetail, 
    ProductOtherExtra 
} from "@/app/components";
import { listItems, listUser } from "@/utils";

const DetailBadminton = () => {
    const router = useRouter()
    const { id } = router.query

    const numericId = typeof id === "string" ? parseInt(id, 10) : id;
    const selectItem = listItems.find(items => items.id === numericId)
    const user = listUser[1]

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <Layout>
            <Container>
                <ProductContent 
                    product={selectItem}
                    user={user}
                />
                <ProductDetail
                    key={selectItem.id}
                    id={selectItem.id}
                    title={selectItem.title}
                    description={selectItem.description}
                    price={selectItem.price}
                    timeOpen={selectItem.timeOpen}
                    timeClose={selectItem.timeClose}
                    slot={selectItem.slot}
                />
                <ProductOtherExtra />
            </Container>
        </Layout>
    )
}

export default DetailBadminton