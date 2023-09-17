import Image from 'next/image'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Product } from '@/types';
import { Button } from '../../providers';
import { useRouter } from 'next/router';

const QuickListItem: React.FC<Product> = ({
    id,
    image,
    title,
    date,
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

    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push(`/detail_badminton/${id}`);
    };

    return (
        <div key={id} className="
                col-span-1 
                shadow-lg 
                rounded-xl 
                mb-2
                transition
                duration-300
            "
        >
            <div className="flex flex-col">
                <div className="
                        relative
                        pb-[50%]
                        transition
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
                            src={image! && image[1].src!}
                            alt="QuickList"
                            className="
                                rounded-t-xl 
                                hover:rounded-t-xl
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
                <div className="
                        p-4 
                        flex 
                        flex-col 
                        gap-3
                        transition
                        duration-300
                    "
                >
                    <h1 className="
                            text-2xl 
                            font-semibold 
                            text-[#922049] 
                            whitespace-nowrap 
                            line-clamp-1
                            transition
                            duration-300
                        "
                    >
                        {title}
                    </h1>
                    <h2 className="
                            text-lg 
                            font-medium 
                            whitespace-nowrap 
                            line-clamp-1
                            transition
                            duration-300
                        "
                    >
                        {price}đ/h
                    </h2>
                    <div className=" 
                            whitespace-nowrap 
                            line-clamp-1 
                            space-x-3
                            transition
                            duration-300
                        "
                    >
                        <span className='text-gray-500'>
                            Thời gian:
                        </span>
                        <span className="
                                text-black 
                                font-semibold 
                                text-lg
                            "
                        >
                            {date}
                        </span>
                        <span className="
                                text-black 
                                font-semibold 
                                text-lg
                            "
                        >
                            {timeOpen} - {timeClose}
                        </span>
                    </div>
                    <p className="
                            text-gray-500 
                            line-clamp-3
                            transition
                            duration-300
                        "
                    >
                        Mô tả ngắn: {description}
                    </p>
                    <div className="flex">
                        <Button 
                            title="Đặt ngay"
                            style=""
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickListItem