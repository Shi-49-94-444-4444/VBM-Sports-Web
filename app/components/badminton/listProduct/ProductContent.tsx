"use client"

import { Product } from "@/types"
import Image from "next/image"
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { Button } from "../../providers";

const ProductContent: React.FC<Product> = ({
    id,
    image,
    title,
    price,
    description,
    timeOpen,
    timeClose,
    slot
}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsLiked(!isLiked);
    };

    const router = useRouter();

    const handleDetailClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push(`/detail_badminton/${id}`);
        event.preventDefault();
    };

    return (
        <div className="
                grid 
                md:grid-cols-11 
                grid-col-1
                border-2 
                rounded-xl
                h-auto
                w-full
                mb-4
                relative
            "
            key={id}
        >
            <div className="md:col-span-5 col-span-1">
                <div className="
                        relative
                        md:h-full
                        sm:h-96
                        h-80
                        transition-all
                        duration-500
                        cursor-pointer
                    "
                >
                    <div className="
                            absolute 
                            top-0
                            left-0 
                            w-full 
                            h-full
                        "
                    >
                        <Image
                            src={image! && image[1].src!}
                            alt="QuickList"
                            className="
                                md:rounded-l-xl
                                md:rounded-r-none
                                rounded-t-xl
                                object-cover
                            "
                            fill
                        />
                    </div>
                    <div
                        className="
                            absolute 
                            top-0 
                            left-0 
                            m-4
                            cursor-pointer
                        "
                        onClick={handleLikeClick}
                    >
                        {isLiked ? (
                            <AiFillHeart
                                size={30}
                                className="
                                    text-red-500 
                                    bg-white 
                                    rounded-full 
                                    p-1
                                "
                            />
                        ) : (
                            <AiOutlineHeart
                                size={30}
                                className="
                                    text-red-500 
                                    bg-white 
                                    rounded-full 
                                    p-1
                                "
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="md:col-span-6 col-span-1 p-4">
                <div className="
                        flex 
                        flex-col 
                        gap-3
                    "
                >
                    <div>
                        <h3 className="text-2xl font-semibold text-[#922049]">
                            {title}
                        </h3>
                    </div>
                    <div className="flex-nowrap text-lg font-semibold">
                        {price} đ/h {'    '}
                        <span className="text-red-500">
                            {price} đ/h
                        </span>
                    </div>
                    <div className="text-base text-gray-500">
                        Thời gian mở cửa: {' '}
                        <span className="font-semibold text-black">
                            {timeOpen}h-{timeClose}h
                        </span>
                    </div>
                    <div className="text-base text-gray-500">
                        Mô tả ngắn: {' '}
                        <span className="line-clamp-2">
                            {description}
                        </span>
                    </div>
                    <div className="font-semibold text-xl">
                        SLOT: {' '}
                        <span>
                            {slot}/30
                        </span>
                    </div>
                    <div>
                        <Button
                            title="Đặt ngay"
                            style="px-10 text-lg font-semibold"
                            onClick={handleDetailClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductContent