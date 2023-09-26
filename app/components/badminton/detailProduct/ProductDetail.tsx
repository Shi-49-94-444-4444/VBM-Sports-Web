"use client"

import { Product } from "@/types"
import { Button } from "../../providers"
import { useRouter } from "next/router";

const ProductDetail: React.FC<Product> = ({
    id,
    date,
    timeOpen,
    timeClose
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
            key={id}
        >
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Địa chỉ:
                </span>
                <span className="break-words">
                    218/20 Đ. Vườn Lài, Phú Thọ Hoà, Tân Phú
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Ngày:
                </span>
                <span className="break-words">
                    {date}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Thời gian:
                </span>
                <span className="break-words">
                    {timeOpen} - {timeClose}
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Vị trí còn trống:
                </span>
                <span className="break-words">
                    2
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Thể loại:
                </span>
                <span className="break-words">
                    Đánh đôi
                </span>
            </div>
            <div className="relative space-x-1 text-lg font-semibold">
                <span className="whitespace-nowrap">
                    Kĩ năng:
                </span>
                <span className="break-words">
                    Mới tập
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