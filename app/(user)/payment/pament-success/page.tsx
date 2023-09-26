import Layout from '@/app/layout';
import { Container, FormatPayment, OtherExtra } from '@/components';

const PaymentSuccess = () => {
    return (
        <Layout>
            <Container>
                <FormatPayment 
                    src="/images/success.png"
                    alt="success"
                    title="Payment successful"
                    description="Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày 
                                 và dàn trang phục vụ cho in.Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, "
                />
                <OtherExtra />
            </Container>
        </Layout>
    )
}

export default PaymentSuccess