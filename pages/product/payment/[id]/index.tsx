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
import Custom404 from "@/pages/404"
import Custom500 from "@/pages/500"
import { getPaymentDetail } from "@/services"
import { TransactionPaymentDetail } from "@/types"

export async function getServerSideProps(context: any) {
    const id = context.params?.id

    if (!id || Array.isArray(id)) {
        return {
            notFound: true,
        }
    }

    try {
        const Payment = await getPaymentDetail({ id: Number(id) })
        if (Payment.data == null) {
            return {
                notFound: true
            }
        }

        return {
            props: {
                Payment,
                tranId: id.toString()
            },
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                internalError: true
            }
        }
    }
}

const PaymentPage = ({ Payment, internalError, tranId }: { Payment: TransactionPaymentDetail, internalError?: boolean, tranId: string }) => {
    if (!Payment) {
        return <Custom404 />
    }

    if (internalError) {
        return <Custom500 />
    }

    return (
        <Layout>
            <ModalNotEnoughMoney tran_id={tranId} />
            <ModalFailPayment tran_id={tranId} />
            <ModalSuccessPayment tran_id={tranId} />
            <Container>
                <div className="relative py-5">
                    <div className="flex items-center justify-center py-5">
                        <div className="text-gray-600 font-semibold text-4xl">
                            Thanh toán
                        </div>
                    </div>
                    <PaymentOverview
                        key={tranId}
                        id={Payment.data.id}
                        slotCount={Payment.data.slotCount}
                        post={Payment.data.post}
                        slots={Payment.data.slots}
                    />
                    <PaymentVoucher />
                    <PaymentMethod />
                    <PaymentBillTotal total={Payment.data.total} />
                    <PaymentForm total={Payment.data.total} tran_id={tranId} />
                </div>
            </Container>
        </Layout>
    )
}

export default PaymentPage