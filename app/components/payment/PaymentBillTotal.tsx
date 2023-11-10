"use client"

import { TransactionPaymentDetailData } from "@/types"
import { formatMoney } from "@/utils"
import Decimal from "decimal.js"

const PaymentBillTotal: React.FC<TransactionPaymentDetailData> = ({
    total,
}) => {
    return (
        <div className="relative bg-[#F5F5F5] rounded-lg my-10 transition-all duration-500">
            <div className="flex flex-col px-6 py-8 gap-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    Tổng Thanh Toán
                </div>
                <div className="border-2 border-gray-300" />
                <div className="flex flex-row ml-auto space-x-10 text-gray-600 text-xl transition-all duration-500">
                    <ul className="flex flex-col gap-3">
                        <li>Tiền đặt sân:</li>
                        <li>Giảm giá:</li>
                        <li>Số tiền cần thanh toán:</li>
                    </ul>
                    <ul className="flex flex-col gap-3 font-semibold">
                        <li>{formatMoney(new Decimal(total ?? 0))}</li>
                        <li>{formatMoney(new Decimal(0))}</li>
                        <li>{formatMoney(new Decimal(total ?? 0))}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PaymentBillTotal