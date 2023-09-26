'use client'

import Layout from "@/app/layout"
import { BlogContent, BlogOtherExtra, Container, Share } from "@/components"
import { listBlog } from "@/utils"

interface BlogProps {
    params: { id: string }
}

const Blog: React.FC<BlogProps> = ({ params }) => {
    const selectItem = listBlog.find(blog => blog.id === params.id)

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
                </div>
            </Container>
            <BlogOtherExtra />  
        </Layout>
    )
}

export default Blog