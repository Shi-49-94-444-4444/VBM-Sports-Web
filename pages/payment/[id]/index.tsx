import { 
    Button, 
    Container, 
    Footer, 
    PaymentBillTotal, 
    PaymentMethod, 
    PaymentOverview, 
    PaymentVoucher 
} from '@/app/components';
import { listItems } from '@/utils';
import Layout from '@/app/layout';
import { useRouter } from 'next/router';

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
                <div className="relative py-5">
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
                    <Button
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