import Image from "next/image"
import { Rating } from "../../providers/format"
import { User } from "@/types"

const UserOther: React.FC<User> = ({
    id,
    src,
    name,
    description,
    rating
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
                "
            >
                <h1 className="
                        text-2xl 
                        font-semibold 
                        whitespace-nowrap 
                        line-clamp-1
                    "
                >
                    {name}
                </h1>
                <p className="
                        text-gray-500 
                        line-clamp-4
                    "
                >
                    Mô tả ngắn: {description}
                </p>
                <div className="
                        flex
                        flex-row
                        text-gray-500 
                        space-x-3
                        items-center
                    "
                >
                    <span>Rating:</span>
                    <Rating rating={rating} maxStars={5} sizeCus={25} />
                </div>
            </div>
        </div>
    )
}

export default UserOther