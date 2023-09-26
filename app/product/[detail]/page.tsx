import Layout from '@/app/layout';
import { listItems, listUser } from "@/utils";
import { Container, ProductContent, ProductOtherExtra, ProductUserPost } from "@/components";

interface DetailBadmintonProps {
    params: { detail: string }
}

const DetailBadminton: React.FC<DetailBadmintonProps> = ({ params }) => {
    const selectItem = listItems.find(items => items.id === params.detail)
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