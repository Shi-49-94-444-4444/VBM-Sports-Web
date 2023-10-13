"use client"

import Image from "next/image"
import Link from "next/link"
import Rating from "../Rating"
import {
    validateDes,
    validateName,
    validateURLAvatar
} from "@/utils"
import { ListUser } from "@/types"

const UserOther: React.FC<ListUser> = ({
    id,
    imgUrl,
    userName,
    sortProfile,
    totalRate,
    flagRegister
}) => {
    return (
        <div className="
                rounded-lg
                border-2
                border-black
                border-opacity-10
                cursor-pointer
            "
            key={id ?? "1"}
        >
            {flagRegister ? (
                <>
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
                                src={validateURLAvatar(imgUrl)}
                                alt={`Player ${id ?? 1}`}
                                className="
                                    rounded-t-lg 
                                    hover:rounded-t-lg
                                    object-cover
                                "
                                fill
                                sizes="(max-width: 600px) 100vw, 600px"
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
                            {validateName(userName)}
                        </h1>
                        <p className="
                                text-gray-500 
                                line-clamp-4
                                text-
                                min-h-[6rem]
                            "
                        >
                            Mô tả ngắn: {validateDes(sortProfile)}
                        </p>
                        <div className="
                                flex
                                flex-row
                                text-gray-500 
                                space-x-3
                                items-center
                            "
                        >
                            <span>Đánh giá:</span>
                            <Rating rating={totalRate ?? 0} maxStars={5} sizeCus={25} />
                        </div>
                    </div>
                </>
            ) : (
                <Link href={`/user/profile-user/${id ?? "1"}`}>
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
                                src={validateURLAvatar(imgUrl)}
                                alt={`Player ${id ?? 1}`}
                                className="
                                    rounded-t-lg 
                                    hover:rounded-t-lg
                                    object-cover
                                "
                                priority
                                fill
                                sizes="(max-width: 600px) 100vw, 600px"
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
                            {validateName(userName)}
                        </h1>
                        <p className="
                                text-gray-500 
                                line-clamp-4
                                text-
                                min-h-[6rem]
                            "
                        >
                            Mô tả ngắn: {validateDes(sortProfile)}
                        </p>
                        <div className="
                                flex
                                flex-row
                                text-gray-500 
                                space-x-3
                                items-center
                            "
                        >
                            <span>Đánh giá:</span>
                            <Rating rating={totalRate ?? 0} maxStars={5} sizeCus={25} />
                        </div>
                    </div>
                </Link>
            )}
        </div>
    )
}

export default UserOther