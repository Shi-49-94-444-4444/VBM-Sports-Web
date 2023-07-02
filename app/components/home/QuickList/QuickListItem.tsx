import Image from 'next/image'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { QuickListItem } from '@/types';

const QuickListItem: React.FC<QuickListItem> = ({
    id,
    src,
    title,
    price,
    timeOpen,
    timeClose,
    description
}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsLiked(!isLiked);
    };

    return (
        <div key={id} className="col-span-1 shadow-lg rounded-xl mb-2">
            <div className="flex flex-col">
                <div className="
                        relative
                        pb-[50%]
                        transition-all
                        duration-300
                        hover:scale-105
                        cursor-pointer
                    "
                >
                    <div className="absolute top-0 left-0 w-full h-full">
                        <Image
                            src={src}
                            alt="QuickList"
                            layout="fill"
                            objectFit="contain"
                            className="rounded-t-xl hover:rounded-none"
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
                                size={24}
                                className="
                                    text-red-500 
                                    bg-white 
                                    rounded-full 
                                    p-1
                                "
                            />
                        ) : (
                            <AiOutlineHeart
                                size={24}
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
                <div className="p-4 flex flex-col gap-3">
                    <h1 className="text-xl font-semibold text-[#922049] whitespace-nowrap line-clamp-1">
                        {title}
                    </h1>
                    <h2 className="text-lg font-medium whitespace-nowrap line-clamp-1">
                        {price}đ/h
                    </h2>
                    <h2 className="text-gray-500 whitespace-nowrap line-clamp-1">
                        Thời gian mở cửa: {' '}
                        <span className="text-black font-semibold text-lg">{timeOpen} AM - {timeClose} PM</span>
                    </h2>
                    <p className="text-gray-500 line-clamp-3">
                        Mô tả ngắn: {description}
                    </p>
                    <div className="flex">
                        <button className="text-navbar-cus bg-white border-2 rounded-full border-navbar-cus py-2 px-4">
                            Đặt ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickListItem