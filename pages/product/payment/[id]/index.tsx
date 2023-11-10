"use client"

import {
    Container,
    ModalFailPayment,
    ModalNotEnoughMoney,
    ModalSuccessPayment,
    PaymentBillTotal,
    PaymentForm,
    PaymentMethod,
    PaymentOverview,
    PaymentVoucher
} from "@/app/components"
import Layout from "@/app/layout"
import { useRouter } from "next/router"
import { AxiosClient } from "@/services"
import useSWR from "swr"
import { TransactionPaymentDetail } from "@/types"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const PaymentPage = () => {
    const router = useRouter()
    const { id } = router.query

    const { data: payment, error, isLoading } = useSWR<TransactionPaymentDetail>(id ? `/api/transactions/${id}/detail` : '', fetcher)

    if (!payment || payment.data == null) {
        return <div>Sản phẩm không tồn tại</div>
    }

    return (
        <Layout>
            <ModalNotEnoughMoney tran_id={payment.data.id}/>
            <ModalFailPayment tran_id={payment.data.id}/>
            <ModalSuccessPayment tran_id={payment.data.id}/>
            <Container>
                <div className="relative py-5">
                    <div className="flex items-center justify-center py-5">
                        <div className="text-gray-600 font-semibold text-4xl">
                            Thanh toán
                        </div>
                    </div>
                    <PaymentOverview
                        key={payment.data.id}
                        id={payment.data.id}
                        slotCount={payment.data.slotCount}
                        post={payment.data.post}
                        slots={payment.data.slots}
                    />
                    <PaymentVoucher />
                    <PaymentMethod />
                    <PaymentBillTotal total={payment.data.total} />
                    <PaymentForm total={payment.data.total}/>
                </div>
            </Container>
        </Layout>
    )
}

export default PaymentPage