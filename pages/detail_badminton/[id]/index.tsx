import { useRouter } from "next/router"
import Layout from '@/app/layout';
import { 
    Container, 
    ProductContent, 
    ProductUserPost, 
    ProductOtherExtra 
} from "@/app/components";
import { listItems, listUser } from "@/utils";

const DetailBadminton = () => {
    const router = useRouter()
    const { id } = router.query

    const selectItem = listItems.find(items => items.id === id)
    const user = listUser[1]

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <Layout>
            <Container>
                <ProductContent 
                    id={selectItem.id}
                    image={selectItem.image}
                    date={selectItem.date}
                    timeOpen={selectItem.timeOpen}
                    timeClose={selectItem.timeClose}
                />
                <ProductUserPost
                    product={selectItem}
                    user={user}
                />
                <ProductOtherExtra />
            </Container>
        </Layout>
    )
}

export default DetailBadminton