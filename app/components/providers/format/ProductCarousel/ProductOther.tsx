"use client"

import { Product } from "@/types";
import Image from "next/image"
import Link from "next/link";

const ProductOther: React.FC<Product> = ({
    id,
    description,
    slot,
    image,
    timeClose,
    timeOpen,
    title
}) => {
    return (
        <div className="
                rounded-xl
                border-2
                border-black
                border-opacity-10
                cursor-pointer
                transition-all
                duration-500
                shadow-sm
            "
            key={id}
        >
            <Link href={`/detail-badminton/${id}`}>
                <div className="
                        relative
                        pb-[70%]
                        transition-all
                        duration-500
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
                            src={image! && image[1].src}
                            alt="QuickList"
                            className="
                                rounded-t-xl 
                                hover:rounded-t-xl
                                object-cover
                            "
                            fill
                            draggable="false"
                        />
                    </div>
                </div>
                <div className="
                        p-4 
                        flex 
                        flex-col 
                        gap-2
                        transition-all
                        duration-500
                    "
                >
                    <h1 className="
                            text-2xl 
                            font-semibold 
                            whitespace-nowrap 
                            line-clamp-1
                            transition-all
                            duration-500
                        "
                    >
                        {title}
                    </h1>
                    <div className="flex flex-row space-x-2 items-center">
                        <span>
                            <Image
                                src="/images/avatar.jpg"
                                alt={`avatar ${id}`}
                                width={50}
                                height={50}
                                className="rounded-full"
                            />
                        </span>
                        <span className="text-gray-600 font-semibold text-xl">
                            Mạnh
                        </span>
                    </div>
                    <p className="text-gray-500 line-clamp-4">
                        Mô tả ngắn: {description}
                    </p>
                    <div className="space-x-1 line-clamp-1 whitespace-nowrap">
                        <span className="text-gray-500">
                            Địa điểm sân:
                        </span>
                        <span className="text-black font-semibold">
                            17 Võ văn hát - Q9
                        </span>
                    </div>
                    <div className="whitespace-nowrap line-clamp-1 space-x-8">
                        <span className='text-gray-500'>
                            Thời gian:
                        </span>
                        <span className="text-black font-semibold">
                            {timeOpen} AM - {timeClose} PM
                        </span>
                    </div>
                    <div className="space-x-7 line-clamp-1 whitespace-nowrap">
                        <span className="text-gray-500">
                            Ngày chơi:
                        </span>
                        <span className="text-black font-semibold">
                            17 Võ văn hát - Q9
                        </span>
                    </div>
                    <div className="
                            text-gray-500 
                            line-clamp-1
                            space-x-[4.5rem]
                        "
                    >
                        <span>
                            Chỗ:
                        </span>
                        <span className="text-black font-semibold">
                            {slot}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductOther