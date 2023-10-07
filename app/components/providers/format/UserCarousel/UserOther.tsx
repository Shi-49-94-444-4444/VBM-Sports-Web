"use client"

import Image from "next/image"
import { User } from "@/types"
import Link from "next/link"
import Rating from "../Rating"

const UserOther: React.FC<User> = ({
    id,
    src,
    name,
    description,
    rating,
    
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
            <Link href={`/profile-user/${id}`}>
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
                            src={src!}
                            alt="QuickList"
                            className="
                                rounded-t-lg 
                                hover:rounded-t-lg
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
            </Link>
        </div>
    )
}

export default UserOther