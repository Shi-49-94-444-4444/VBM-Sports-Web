import { Container } from '@/app/components'
import Layout from '@/app/layout'

export default function Custom500() {
    return (
        <Layout>
            <Container>
                <div className="relative h-screen flex flex-col items-center justify-center gap-5 text-primary-blue-cus font-semibold">
                    <h1 className="text-3xl">500 - Lỗi máy chủ</h1>
                    <p className="text-2xl">Xin lỗi, có lỗi xảy ra từ phía máy chủ. Vui lòng thử lại sau.</p>
                </div>
            </Container>
        </Layout>
    );
}
