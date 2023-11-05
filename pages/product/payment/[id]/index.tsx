"use client"

import {
    Button,
    Container,
    PaymentBillTotal,
    PaymentMethod,
    PaymentOverview,
    PaymentVoucher
} from "@/app/components"
import Layout from "@/app/layout"
import { useRouter } from "next/router"
import { AxiosClient } from "@/services"
import { ProductDetailContent } from "@/types"
import useSWR from "swr"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const PaymentPage = () => {
    const router = useRouter()
    const { id } = router.query

    const { data: product, error, isLoading } = useSWR<ProductDetailContent>(id ? `/api/posts/${id}/details` : '', fetcher)

    if (!product) {
        return <div>Sản phẩm không tồn tại</div>
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
                        key={product.id}
                        id={product.id}
                        imgUrl={product.imgUrl}
                        title={product.title}
                        priceSlot={product.priceSlot}
                        addressSlot={product.addressSlot}
                        days={product.days}
                        startTime={product.startTime}
                        endTime={product.endTime}
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