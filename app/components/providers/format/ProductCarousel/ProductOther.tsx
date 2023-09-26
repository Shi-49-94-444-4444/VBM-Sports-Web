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
            "
            key={id}
        >
            <Link href={`/detail_badminton/${id}`}>
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
                        gap-3
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
                    <p className="
                            text-gray-500 
                            line-clamp-4
                            transition-all
                            duration-500
                        "
                    >
                        Mô tả ngắn: {description}
                    </p>
                    <div className=" 
                            whitespace-nowrap 
                            line-clamp-1 
                            space-x-3
                            transition-all
                            duration-500
                        "
                    >
                        <span className='text-gray-500'>
                            Time:
                        </span>
                        <span className="
                                text-black 
                                font-semibold 
                            "
                        >
                            {timeOpen} AM - {timeClose} PM
                        </span>
                    </div>
                    <div className="
                            text-gray-500 
                            line-clamp-4
                            transition-all
                            duration-500
                            space-x-5
                        "
                    >
                        <span>
                            Slot:
                        </span>
                        <span className="text-black font-semibold">
                            {slot}/30
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductOther