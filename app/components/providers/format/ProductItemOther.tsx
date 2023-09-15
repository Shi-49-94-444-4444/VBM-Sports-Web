import { Product } from "@/types";
import Image from "next/image"

const ProductItemOther: React.FC<Product> = ({
    id,
    description,
    slot,
    src,
    timeClose,
    timeOpen,
    title
}) => {
    return (
        <div className="
                rounded-lg
                border-2
                border-black
                border-opacity-10
                cursor-pointer
            "
            key={id}
        >
            <div className="
                    relative
                    pb-[70%]
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
                        src={src!}
                        alt="QuickList"
                        layout="fill"
                        objectFit="cover"
                        className="
                            rounded-t-xl 
                            hover:rounded-none
                        "
                    />
                </div>
            </div>
            <div className="
                    p-4 
                    flex 
                    flex-col 
                    gap-3
                    transition-all
                    duration-300
                "
            >
                <h1 className="
                        text-2xl 
                        font-semibold 
                        whitespace-nowrap 
                        line-clamp-1
                        transition-all
                        duration-300
                    "
                >
                    {title}
                </h1>
                <p className="
                        text-gray-500 
                        line-clamp-4
                        transition-all
                        duration-300
                    "
                >
                    Mô tả ngắn: {description}
                </p>
                <div className=" 
                        whitespace-nowrap 
                        line-clamp-1 
                        space-x-3
                        transition-all
                        duration-300
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
                        duration-300
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
        </div>
    )
}

export default ProductItemOther