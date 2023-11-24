"use client"

import Image from "next/image"
import { Button } from "../../providers"
import { ListTransactionData } from "@/types"
import { useRouter } from "next/navigation"

const TransactionContent: React.FC<ListTransactionData> = ({
    id,
    slots,
    moneyPaied,
    playingArea
}) => {
    const router = useRouter()

    return (
        <div className="lg:grid lg:grid-cols-12 flex flex-col rounded-lg border border-black border-opacity-10 transition-all duration-500" key={id}>
            <div className="lg:col-span-4 relative lg:h-full md:h-96 sm:h-80 h-72 transition duration-300">
                <Image
                    src="/images/item_1.jpg"
                    alt="image"
                    sizes="(max-width: 600px) 100vw, 600px"
                    fill
                    className="object-cover lg:rounded-l-lg rounded-t-lg lg:rounded-r-none transition-all duration-500"
                />
            </div>
            <div className="lg:col-span-8 p-6 flex flex-col gap-3">
                <div className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-2 transition-all duration-500">
                    <div className="text-3xl font-semibold text-gray-600">
                        Sân Minh họa
                    </div>
                    <div className="text-xl font-semibold">
                        Chưa có
                    </div>
                </div>
                <section className="space-x-3 text-xl">
                    <span>
                        Địa chỉ:
                    </span>
                    <span>
                        Chưa có
                    </span>
                </section>
                <div className="flex flex-col gap-2 text-xl">
                    <label>
                        Ngày chơi:
                    </label>
                    {slots.map((slot) => (
                        <div key={slot.id} className="pl-2">
                            - {slot.playDate}
                        </div>
                    ))}
                </div>
                <div className="flex space-x-5">
                    <section className="space-x-3 text-xl">
                        <span>
                            Thể loại:
                        </span>
                        <span>
                            Chưa có
                        </span>
                    </section>
                    <section className="space-x-3 text-xl">
                        <span>
                            Chế độ:
                        </span>
                        <span>
                            Chưa có
                        </span>
                    </section>
                </div>
                <section className="space-x-3 text-xl">
                    <span>
                        Người chơi đã tham gia:
                    </span>
                    <span>
                        Chưa có
                    </span>
                </section>
                <div className="flex w-full xl:gap-5 gap-2 flex-wrap lg:flex-nowrap transition-all duration-500">
                    <Button
                        title="Báo cáo"
                        style="text-xl px-4 white whitespace-nowrap"
                    />
                    <Button
                        title="Mở trò chuyện"
                        style="text-xl px-4 whitespace-nowrap"
                    />
                    <Button
                        title="Xem chi tiết thanh toán"
                        style="text-xl px-4 whitespace-nowrap"
                        onClick={() => router.push(`/transaction/detail-transaction/${id}`)}
                    />
                </div>
            </div>
        </div>
    )
}

export default TransactionContent