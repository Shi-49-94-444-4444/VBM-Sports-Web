"use client"

import { ProductDetailContent } from "@/types"
import { Button } from "../../providers"
import { useRouter } from "next/router";
import { FormatTime, GetFirstDate, validateAddress, validateDate } from "@/utils";

const ProductDetail: React.FC<ProductDetailContent> = ({
    id,
    days,
    startTime,
    endTime,
    addressSlot,
    quantitySlot,
    levelSlot,
    categorySlot
}) => {
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push(`/payment/${id}`);
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
                gap-5
                transition-all
                duration-500
            "
            key={id ?? "1"}
        >
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Địa chỉ:
                </span>
                <span className="break-words">
                    {validateAddress(addressSlot)}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Ngày:
                </span>
                <span className="break-words">
                    <GetFirstDate dateString={validateDate(days)} />
                </span>
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
                    {quantitySlot ?? 0}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Thể loại:
                </span>
                <span className="break-words">
                    {categorySlot ?? "Đánh tự do"}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Kĩ năng:
                </span>
                <span className="break-words">
                    {levelSlot ?? "Trung bình"}
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