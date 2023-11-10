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
                    <div className="flex flex-row text-gray-600 text-xl font-medium space-x-8">
                        <ul className="space-y-4">
                            <li>Địa điểm:</li>
                            <li>Thể loại:</li>
                            <li>Ngày:</li>
                            <li>Thời gian:</li>
                            <li>Chỗ đã đặt:</li>
                        </ul>
                        <ul className="space-y-4">
                            <li>{validateAddress(post && post.address)}</li>
                            <li>Chưa có</li>
                            <li className="space-x-3">{slots && slots.map((slot) => <span key={slot.id}>{slot.playDate}</span>)}</li>
                            <li><FormatTime timeString={post ? post.startTime : "00:00"} />-<FormatTime timeString={post ? post.endTime : "00:00"} /></li>
                            <li>{slotCount}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOverview