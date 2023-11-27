"use client"

import Image from "next/image"
import { Button } from "../../providers"
import { ListTransactionData } from "@/types"
import { useRouter } from "next/navigation"
import { formatDateFunc, formatTimeFunc, validateAddress, validateTitle, validateURLProduct } from "@/utils"
import { format, parse } from "date-fns"

const TransactionContent: React.FC<ListTransactionData> = ({
    postId,
    transacionId,
    postTitle,
    coverImage,
    status,
    areaName,
    startTime,
    endTime,
    bookedInfos,
    availableSlot,
    moneyPaid
}) => {
    const router = useRouter()

    const date = format(parse(startTime, "dd/MM/yyyy hh:mm:ss a", new Date()), "dd/MM/yyyy")
    const formatStartTime = format(parse(startTime, "dd/MM/yyyy hh:mm:ss a", new Date()), "HH:mm")
    const formatEndTime = format(parse(endTime, "dd/MM/yyyy hh:mm:ss a", new Date()), "HH:mm")

    return (
        <div className="lg:grid lg:grid-cols-12 flex flex-col rounded-lg border border-black border-opacity-10 transition-all duration-500" key={transacionId}>
            <div className="lg:col-span-4 relative lg:h-full md:h-96 sm:h-80 h-72 transition duration-300">
                <Image
                    src={validateURLProduct(coverImage)}
                    alt="image"
                    sizes="(max-width: 600px) 100vw, 600px"
                    placeholder="blur"
                    blurDataURL={validateURLProduct(coverImage)}
                    fill
                    className="object-cover lg:rounded-l-lg rounded-t-lg lg:rounded-r-none transition-all duration-500"
                />
            </div>
            <div className="lg:col-span-8 p-6 flex flex-col gap-3">
                <div className="flex md:flex-row flex-col md:justify-between md:items-center md:gap-0 gap-2 transition-all duration-500">
                    <div className="text-3xl font-semibold text-gray-600">
                        {validateTitle(postTitle)}
                    </div>
                    <div className="text-xl font-semibold text-green-500">
                        {status}
                    </div>
                </div>
                <section className="space-x-3 text-xl">
                    <span>
                        Địa chỉ:
                    </span>
                    <span>
                        {validateAddress(areaName)}
                    </span>
                </section>
                <div className="space-x-3 text-xl">
                    <span>
                        Ngày chơi:
                    </span>
                    <span>
                        {formatDateFunc(date.toString())}
                    </span>
                    <span>
                        {formatTimeFunc(formatStartTime.toString())} - {formatTimeFunc(formatEndTime.toString())}
                    </span>
                </div>
                <section className="space-x-3 text-xl">
                    <span>
                        Người chơi đã tham gia:
                    </span>
                    <span>
                        {bookedInfos.length}
                    </span>
                </section>
                <section className="space-x-3 text-xl">
                    <span>
                        Số chỗ còn trống:
                    </span>
                    <span>
                        {availableSlot ?? 0}
                    </span>
                </section>
                <div className="flex w-full xl:gap-5 gap-2 flex-wrap lg:flex-nowrap transition-all duration-500">
                    <Button
                        title="Báo cáo"
                        style="text-xl px-4 white whitespace-nowrap"
                    />
                    <Button
                        title="Đặt sân tiếp"
                        style="text-xl px-4 whitespace-nowrap"
                        onClick={() => router.replace(`/product/detail-product/${postId}`)}
                    />
                    <Button
                        title="Xem chi tiết thanh toán"
                        style="text-xl px-4 whitespace-nowrap"
                        onClick={() => router.replace(`/transaction/detail-transaction/${transacionId}`)}
                    />
                </div>
            </div>
        </div>
    )
}

export default TransactionContent