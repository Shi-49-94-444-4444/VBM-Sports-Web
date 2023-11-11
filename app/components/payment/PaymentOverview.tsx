import { TransactionPaymentDetailData } from "@/types"
import { ImageCarousel } from "../providers"
import { FormatTime, formatMoney, validateAddress, validateTitle } from "@/utils"
import Decimal from "decimal.js"

const PaymentOverview: React.FC<TransactionPaymentDetailData> = ({
    id,
    slotCount,
    post,
    slots,
}) => {
    return (
        <div className="relative grid xl:grid-cols-5 lg:grid-cols-7 grid-cols-1 bg-[#F5F5F5] rounded-lg my-5 gap-5 transition-all duration-500">
            <div className="xl:col-span-2 lg:col-span-3 col-span-1 lg:h-full md:h-96 sm:h-80 h-64 transition-all duration-500">
                <ImageCarousel
                    key={id}
                    id={id}
                    imageUrls={post && post.imageUrls}
                />
            </div>
            <div className="xl:col-span-3 lg:col-span-4 p-4 col-span-1 transition-all duration-500">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <div className="text-2xl font-semibold">
                            {validateTitle(post && post.title)}
                        </div>
                        <div className="ml-auto text-2xl text-primary-blue-cus font-semibold">
                            {formatMoney(new Decimal(post ? post.pricePerSlot : 0))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 text-gray-600 text-xl font-medium">
                        <section className="space-x-3">
                            <span className="font-semibold">
                                Địa điểm:
                            </span>
                            <span>
                                {validateAddress(post && post.address)}
                            </span>
                        </section>
                        <section className="flex flex-row space-x-3">
                            <span className="font-semibold">
                                Thể loại:
                            </span>
                            <span>
                                Chưa có
                            </span>
                        </section>
                        <section className="flex flex-row space-x-3">
                            <span className="font-semibold">
                                Ngày:
                            </span>
                            <div className="space-x-3">
                                {slots && slots.map((slot) => <span key={slot.id}>{slot.playDate}</span>)}
                            </div>
                        </section>
                        <section className="flex flex-row space-x-3">
                            <span className="font-semibold">
                                Thể loại:
                            </span>
                            <div>
                                <FormatTime timeString={post ? post.startTime : "00:00"} />-<FormatTime timeString={post ? post.endTime : "00:00"} />
                            </div>
                        </section>
                        <section className="flex flex-row space-x-3">
                            <span className="font-semibold">
                                Chỗ đã đặt:
                            </span>
                            <span>
                                {slotCount}
                            </span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOverview