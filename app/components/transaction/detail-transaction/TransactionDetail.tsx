import { TransactionPaymentDetailData } from "@/types"
import { formatDateFunc } from "@/utils"

const TransactionDetail: React.FC<TransactionPaymentDetailData> = ({
    slotCount,
    slots,
    buyerName,
    payTime,
    post
}) => {
    return (
        <div className="col-span-8 rounded-lg bg-[#F5F5F5] p-6 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-semibold ">
                    Chi tiết đơn hàng
                </h1>
                <section className="space-x-3 text-lg">
                    <span className="font-semibold">Mã đơn hàng:</span>
                    <span className="font-medium">Chưa có</span>
                </section>
                <section className="space-x-3 text-lg">
                    <span className="font-semibold">Số lượng đặt hàng:</span>
                    <span className="font-medium">{slotCount}</span>
                </section>
                <section className="flex flex-col gap-3 text-lg">
                    <label className="font-semibold">ID chỗ của bạn:</label>
                    {slots && slots.map((slot) => (
                        <p className="font-medium pl-2" key={slot.id}>- {slot.id}</p>
                    ))}
                </section>
                <section className="space-x-3 text-lg">
                    <span className="font-semibold">Người thanh toán:</span>
                    <span className="font-medium">{buyerName}</span>
                </section>
                <section className="space-x-3 text-lg">
                    <span className="font-semibold">Thời gian thanh toán:</span>
                    <span className="font-medium">{payTime}</span>
                </section>
            </div>
            <div className="border-b-4 border-solid border-gray-300" />
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl font-semibold ">
                    Tham gia tập luyện cùng tôi!!!
                </h1>
                <section className="flex space-x-3 text-lg">
                    <label className="font-semibold">Thể loại:</label>
                    <p className="font-medium">Chưa có</p>
                </section>
                <section className="space-x-3 text-lg">
                    <span className="font-semibold">Địa chỉ:</span>
                    <span className="font-medium">{post && post.address}</span>
                </section>
                <section className="space-x-3 text-lg">
                    <span className="font-semibold">Được tạo bởi:</span>
                    <span className="font-medium">Chưa có</span>
                </section>
                <section className="flex flex-col gap-3 text-lg">
                    <label className="font-semibold">Ngày chơi:</label>
                    {slots && slots.map((slot) => (
                        <p className="font-medium pl-2" key={slot.id}>- {formatDateFunc(slot.playDate)}</p>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default TransactionDetail