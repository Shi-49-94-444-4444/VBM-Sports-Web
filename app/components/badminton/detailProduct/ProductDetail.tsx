"use client"

import { ProductDetailContent } from "@/types"
import { Button } from "../../providers"
import { useRouter } from "next/router";
import { FormatTime, formatDateFunc, getDates, validateAddress, validateDate } from "@/utils";

const ProductDetail: React.FC<ProductDetailContent> = ({
    id,
    days,
    startTime,
    endTime,
    addressSlot,
    availableSlot,
    levelSlot,
    categorySlot
}) => {
    const router = useRouter();
    const dates = getDates(validateDate(days))

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push(`/payment`);
        event.preventDefault();
    };

    return (
        <div className="
                relative
                bg-gray-200 
                flex 
                flex-col 
                w-full 
                rounded-xl 
                p-6 
                gap-3
                transition-all
                duration-500
            "
            key={id ?? "1"}
        >
            <div className="relative space-x-1 text-lg">
                <span className="whitespace-nowrap font-semibold">
                    Địa chỉ:
                </span>
                <span className="break-words text-gray-600 font-semibold">
                    {validateAddress(addressSlot)}
                </span>
            </div>
            <div className="relative flex flex-col gap-2">
                <div className="text-lg font-semibold">
                    Ngày:
                </div>
                <div className="text-gray-600 font-semibold italic">
                    {dates.map((date, index) => (
                        <div className="" key={index}>
                            - {formatDateFunc(date)}
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Thời gian:
                </span>
                <span className="break-words">
                    <FormatTime timeString={startTime ?? "00:00"} /> -
                    <FormatTime timeString={endTime ?? "00:00"} />
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Vị trí còn trống:
                </span>
                <span className="break-words">
                    {availableSlot ?? 0}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Thể loại:
                </span>
                <span className="break-words">
                    {categorySlot ?? "null"}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Kĩ năng:
                </span>
                <span className="break-words">
                    {levelSlot ?? "null"}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Nhập số chỗ đặt:
                </span>
                <span className="break-words">
                    1
                </span>
            </div>
            <Button
                title="Đặt chỗ ngay"
                style="py-4 justify-center"
                onClick={handleClick}
            />
        </div>
    )
}

export default ProductDetail