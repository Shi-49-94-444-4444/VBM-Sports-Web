import { BlogContent, BlogOtherExtra, Container, Share } from "@/app/components"
import Layout from "@/app/layout"
import { listBlog } from "@/utils"
import { useRouter } from "next/router"

const Blog = () => {

    const router = useRouter()
    const { id } = router.query

    const selectItem = listBlog.find(blog => blog.id === id)

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <Layout>
            <Container>
                <div className="relative py-5">
                    <BlogContent
                        key={selectItem.id}
                        id={selectItem.id}
                        src={selectItem.src}
                        title={selectItem.title}
                        description={selectItem.description}
                        date={selectItem.date}
                        poster={selectItem.poster}
                    />
                    <div className="relative py-10">
                        <Share />
                    </div>
                    <BlogOtherExtra />
                </div>
            </Container>
        </Layout>
    )
}

export default Blog