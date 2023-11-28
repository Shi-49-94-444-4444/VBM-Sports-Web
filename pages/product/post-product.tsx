import { Container, PostNewForm, } from '@/app/components';
import Layout from '@/app/layout';
import Link from 'next/link';

const PostBadmintonPage = () => {
    return (
        <Layout>
            <Container>
                <div className="relative mb-10">
                    <div className="relative py-10">
                        <div className="flex justify-center">
                            <h1 className="text-gray-600 font-semibold text-4xl">
                                Tạo Bài Đăng mới
                            </h1>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="py-4">
                            <h2 className="
                                    text-base 
                                    font-medium 
                                    text-gray-600 
                                    whitespace-nowrap
                                "
                            >
                                Xem thêm về {' '}
                                <span className="text-black underline">
                                    <Link href="#">
                                        Quy định của chúng tôi
                                    </Link>
                                </span>
                            </h2>
                        </div>
                    </div>
                    <PostNewForm />
                </div>
            </Container>
        </Layout>
    )
}

export default PostBadmintonPage