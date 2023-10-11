import { Container } from '@/app/components';
import Layout from '@/app/layout';

export default function Unauthorized() {
    return (
        <Layout>
            <Container>
                <div className="relative h-screen flex flex-col items-center justify-center gap-5 text-primary-blue-cus font-semibold">
                    <h1 className="text-3xl">401 - Không có quyền truy cập</h1>
                    <p className="text-2xl">Xin lỗi, bạn không có quyền truy cập vào trang này.</p>
                    <p className="text-2xl">Bạn cần phải login để sử dụng trang này</p>
                </div>
            </Container>
        </Layout>
    );
}
