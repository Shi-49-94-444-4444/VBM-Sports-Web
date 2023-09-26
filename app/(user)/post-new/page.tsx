'use client'

import { images } from '@/utils';
import Layout from '@/app/layout';
import Link from 'next/link';
import { Container, PostNewForm, ThumbGallery } from '@/components';

const PostNew = () => {
    return (
        <Layout>
            <Container>
                <div className="relative mb-10">
                    <div className="relative py-10">
                        <div className="flex justify-center">
                            <h1 className="title-custom">
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
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <div className="col-span-1">
                            <ThumbGallery images={images} />
                        </div>
                        <div className="col-span-1">
                            <PostNewForm />
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default PostNew