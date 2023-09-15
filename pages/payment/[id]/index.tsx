import { ButtonCus, Container, Footer, ImageCarousel, PaymentBillTotal, PaymentMethod, PaymentOverview, PaymentVoucher } from '@/app/components';
import { listItems } from '@/app/constants';
import Layout from '@/app/layout';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Select from 'react-select';

const Payment = () => {
    const router = useRouter()
    const { id } = router.query

    const numericId = typeof id === "string" ? parseInt(id, 10) : id;
    const selectItem = listItems.find(item => item.id === numericId)

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <Layout>
            <Container>
                <div className="relative">
                    <div className="flex items-center justify-center py-5">
                        <div className="title-custom">
                            Payment Checking
                        </div>
                    </div>
                    <PaymentOverview 
                        key={selectItem.id}
                        id={selectItem.id}
                        image={selectItem.image}
                    />
                    <PaymentVoucher />
                    <PaymentMethod />
                    <PaymentBillTotal />
                    <ButtonCus
                        title="Thanh Toán"
                        style="ml-auto px-32 py-4 text-xl"
                        onClick={() => { }}
                    />
                </div>
            </Container>
            <Footer />
        </Layout>
    )
}

export default Payment