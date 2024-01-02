import { formatMoney } from "@/utils"
import Decimal from "decimal.js"
import Image from "next/image"
import { Button } from "../../providers"
import { TransactionPaymentDetailData } from "@/types"
import { add, isBefore, parse } from "date-fns"
import { useTransactionModal } from "@/hooks"

const TransactionExtra: React.FC<TransactionPaymentDetailData> = ({
    total,
    isCancel,
    post,
}) => {
    const endTime = post && parse(post.endTime, "dd/MM/yyyy HH:mm", new Date())
    const currentTime = new Date();

    const isBefore24Hours = endTime && isBefore(currentTime, add(endTime, { hours: -24 }))

    const transactionModal = useTransactionModal()

    return (
        <div className="col-span-4 gap-5 flex flex-col">
            {/* <div className="flex flex-col gap-5 rounded-lg bg-[#F5F5F5] p-6 text-gray-600">
                <label className="text-2xl font-semibold ">
                    Voucher đã áp dụng
                </label>
                <p className="text-lg font-medium">
                    KM100K
                </p>
            </div> */}
            <div className="flex flex-col gap-5 rounded-lg bg-[#F5F5F5] p-6 text-gray-600">
                <label className="text-2xl font-semibold ">
                    Số tiền đã thanh toán
                </label>
                <div className="text-3xl font-semibold">
                    {formatMoney(new Decimal(total ?? 0))}
                </div>
            </div>
            <div className="flex flex-col gap-5 rounded-lg bg-[#F5F5F5] p-6 text-gray-600">
                <label className="text-2xl font-semibold ">
                    Phương thức đã thanh toán
                </label>
                <div className="flex flex-row gap-3">
                    <div className="relative flex-shrink-0">
                        <Image
                            src="/images/walletIcon.png"
                            alt="payment"
                            height={60}
                            width={60}
                            className="object-contain w-20 h-16"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="text-xl text-gray-600 font-semibold">
                            Ví VBM
                        </div>
                        <div className="text-xl text-gray-500 font-normal">
                            ******
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-center">
                {!isCancel ? (
                    <Button
                        title="Thanh toán ngay"
                        style="py-3 text-lg"
                        onClick={transactionModal.onOpen}
                    />
                ) : (
                    isBefore24Hours && (
                        <Button
                            title="Hủy chỗ đặt"
                            style="py-3 text-lg"
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default TransactionExtra