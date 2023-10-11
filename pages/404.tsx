import { Container } from '@/app/components';
import Layout from '@/app/layout';

export default function Custom404() {
    return (
        <Layout>
            <Container>
                <div className="relative h-screen flex flex-col items-center justify-center gap-5 text-primary-blue-cus font-semibold">
                    <h1 className="text-3xl">404 - Trang không được tìm thấy</h1>
                    <p className="text-2xl">Xin lỗi, trang bạn đang tìm kiếm không tồn tại.</p>
                </div>
            </Container>
        </Layout>
    );
}
