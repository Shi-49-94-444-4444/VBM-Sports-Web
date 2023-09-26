'use client'    

import { listItems } from '@/utils';
import Layout from '@/app/layout';
import { Button, Container, PaymentBillTotal, PaymentMethod, PaymentOverview, PaymentVoucher } from '@/components';

interface PaymentProps {
    params: { id: string }
}
const Payment: React.FC<PaymentProps> = ({ params }) => {
    const selectItem = listItems.find(item => item.id === params.id)

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>;
    }

    const handleClick = () => {

    }
    
    return (
        <Layout>
            <Container>
                <div className="relative py-5">
                    <div className="flex items-center justify-center py-5">
                        <div className="text-gray-600 font-semibold text-3xl">
                            Thanh toán
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
                    <div className="flex justify-center transition-all duration-500">
                        <Button
                            title="Thanh Toán"
                            style="md:ml-auto px-32 py-4 text-xl"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default Payment