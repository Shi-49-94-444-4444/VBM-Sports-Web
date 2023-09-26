"use client"

import Image from "next/image"
import { Rating } from "../../providers/format"
import { User } from "@/types"
import { useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

const UserProfileComments: React.FC<User> = ({
    id,
    comments
}) => {
    const [showMoreComments, setShowMoreComments] = useState(false);
    const initialCommentCount = 3;

    const displayedComments = showMoreComments
        ? comments
        : comments?.slice(0, initialCommentCount);

    const handleShowMoreClick = () => {
        setShowMoreComments(true);
    };

    return (
        <div className="relative flex flex-col gap-5" key={id}>
            <div className="text-2xl font-semibold text-gray-600">
                Lời bình luận
            </div>
            <div className="border-2 border-gray-300" />
            {displayedComments?.map((item, index) => (
                <>
                    <div className="flex flex-col gap-5" key={item.id}>
                        <div className="flex flex-row gap-5 items-center">
                            <div className="relative flex-shrink-0">
                                <Image
                                    src={item.src}
                                    alt="avatar"
                                    width="100"
                                    height="100"
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div className="">
                                <div className="flex flex-col gap-2">
                                    <div className="text-2xl font-semibold">
                                        {item.name}
                                    </div>
                                    <div className="relative">
                                        <Rating rating={item.rating} maxStars={5} sizeCus={30} />
                                    </div>
                                </div>
                            </div>
                            <div className="ml-auto">
                                <div className="text-gray-500 text-right font-medium text-lg">
                                    {item.date}
                                </div>
                            </div>
                        </div>
                        <div className="text-xl text-gray-600 font-medium">
                            {item.comment}
                        </div>
                    </div>
                    {index < displayedComments.length - 1 && (
                        <div className="border-b-2 border-gray-300" key={`divider-${item.id}`} />
                    )}
                </>
            ))}
            {!showMoreComments && comments && comments.length > initialCommentCount && (
                <div className="ml-auto">
                    <button
                        className="text-gray-600 text-xl font-semibold cursor-pointer flex items-center space-x-1"
                        onClick={handleShowMoreClick}
                    >
                        <span>Xem thêm ({comments.length - initialCommentCount})</span>
                        <span className="inline-block">
                            <BsChevronDoubleDown />
                        </span>
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserProfileComments