"use client"

import {
    Button,
    Container,
    PaymentBillTotal,
    PaymentMethod,
    PaymentOverview,
    PaymentVoucher
} from "@/app/components"
import { listItems } from "@/utils"
import Layout from "@/app/layout"
import { useRouter } from "next/router"

const PaymentPage = () => {
    const router = useRouter()
    const { id } = router.query

    const selectItem = listItems.find(item => item.id === id)

    if (!selectItem) {
        return <div>Sản phẩm không tồn tại</div>;
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
                            onClick={() => { }}
                        />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default PaymentPage