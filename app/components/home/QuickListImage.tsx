import { QuickListImageProps } from '@/types';
import Image from 'next/image'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const QuickListImage: React.FC<QuickListImageProps> = ({
    src
}) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setIsLiked(!isLiked);
    };

    return (
        <div className="
                relative 
                w-[500px] 
                h-[300px] 
            "
        >
            <div className="
                    relative 
                    w-[500px] 
                    h-[300px]
                "
            >
                <Image 
                    src={src} 
                    alt="QuickList" 
                    layout="fill" 
                    objectFit="cover"
                />
            </div>
            <div
                className="
                    absolute 
                    top-0 
                    right-0 
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
    )
}

export default QuickListImage;
