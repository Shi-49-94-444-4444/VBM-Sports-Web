import { ProductItem } from "@/types"
import Image from "next/image"
import { useRouter } from "next/router";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import ButtonCus from "../../ButtonCus";

const ProductContent: React.FC<ProductItem> = ({
    id,
    src,
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
        event.preventDefault();
        router.push(`/detail_badminton/${id}`);
        console.log(id)
    };

    return (
        <div className="
                grid 
                grid-cols-11 
                border-2 
                rounded-sm
                h-auto
                w-full
                mb-4
                relative
            "
            key={id}
        >
            <div className="col-span-5">
                <div className="
                        relative
                        h-full
                        transition-all
                        duration-300
                        hover:scale-105
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
                            src={src}
                            alt="QuickList"
                            layout="fill"
                            objectFit="cover"
                            className="
                                rounded-xl 
                                hover:rounded-none
                            "
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
            <div className="col-span-6 p-4">
                <div className="
                        flex 
                        flex-col 
                        gap-5
                    "
                >
                    <div>
                        <h3 className="text-lg font-semibold">
                            {title}
                        </h3>
                    </div>
                    <div className="flex-nowrap text-lg">
                        {price} đ/h {'    '}
                        <span className="text-red-500">
                            {price} đ/h
                        </span>
                    </div>
                    <div className="text-base">
                        Thời gian mở cửa: {' '}
                        <span className="font-semibold">
                            {timeOpen}h-{timeClose}h
                        </span>
                    </div>
                    <div className="text-base">
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
                        <ButtonCus
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