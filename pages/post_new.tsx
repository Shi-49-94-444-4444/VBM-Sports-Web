import { 
    Container, 
    Footer, 
    PostNewForm, 
    ThumbGallery 
} from '@/app/components';
import { images } from '@/constant';
import Layout from '@/app/layout';
import Link from 'next/link';

const post_new = () => {
    return (
        <Layout>
            <Container>
                <div className="relative mb-20">
                    <div className="relative py-10">
                        <div className="flex justify-center">
                            <h1 className="text-3xl font-medium text-gray-600">
                                New post page
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
                    <div className="grid grid-cols-2 gap-10">
                        <div className="col-span-1">
                            <ThumbGallery images={images} />
                        </div>
                        <div className="col-span-1">
                            <PostNewForm />
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </Layout>
    )
}

export default post_new