"use client"

import Image from "next/image"
import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { ListProductData } from "@/types"
import { FormatTime, formatMoney, validateAddress, validateDes, validateName, validateURLAvatar, validateURLProduct } from "@/utils"
import { format, parse } from "date-fns"
import Decimal from "decimal.js"
import Link from "next/link"

interface FormatSlot {
    date: string,
    startTime: string,
    endTime: string,
    priceSlot: string,
    available: string
}

const ProductContent: React.FC<ListProductData> = ({
    id,
    imgUrl,
    title,
    contentPost,
    slotsInfo,
    addressSlot,
    idUserToNavigation
}) => {
    const [isLiked, setIsLiked] = useState(false)

    const slotSlipt = slotsInfo && slotsInfo.split(";")
    let formattedSlots: FormatSlot[] = []

    slotSlipt && slotSlipt.forEach(slot => {
        const [startTimeString, endTimeString, priceSlotSlipt, availableSlipt] = slot.split(",")

        let dateSlipt = "";
        let startTimeSlipt = "";
        let endTimeSlipt = "";

        try {
            dateSlipt = format(parse(startTimeString, "MM/dd/yyyy h:mm:ss a", new Date()), "dd/MM/yyyy")
        } catch (error) {
            console.error("Error parsing and formatting date: ", error);
        }

        try {
            startTimeSlipt = format(parse(startTimeString, "MM/dd/yyyy h:mm:ss a", new Date()), "HH:mm")
        } catch (error) {
            console.error("Error parsing and formatting start time: ", error);
        }

        try {
            endTimeSlipt = format(parse(endTimeString, "MM/dd/yyyy h:mm:ss a", new Date()), "HH:mm")
        } catch (error) {
            console.error("Error parsing and formatting end time: ", error);
        }

        formattedSlots.push({
            date: dateSlipt,
            startTime: startTimeSlipt,
            endTime: endTimeSlipt,
            priceSlot: priceSlotSlipt,
            available: availableSlipt
        })
    })

    const handleLikeClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        event.preventDefault()
        setIsLiked(!isLiked)
    }

    return (
        <Link className="
                grid 
                md:grid-cols-11 
                grid-col-1
                border-2 
                rounded-xl
                h-auto
                w-full
                mb-4
                relative
            "
            key={id}
            href={`/product/detail-badminton/${id}`}
        >
            <div className="md:col-span-5 col-span-1">
                <div className="
                        relative
                        md:h-full
                        sm:h-96
                        h-80
                        transition-all
                        duration-500
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
                            src={validateURLProduct(imgUrl)}
                            alt="QuickList"
                            className="
                                md:rounded-l-xl
                                md:rounded-r-none
                                rounded-t-xl
                                object-cover
                            "
                            placeholder="blur"
                            blurDataURL={validateURLProduct(imgUrl)}
                            sizes="(max-width: 600px) 100vw, 600px"
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
                                size={30}
                                className="
                                    text-red-500 
                                    bg-white 
                                    rounded-full 
                                    p-1
                                "
                            />
                        ) : (
                            <AiOutlineHeart
                                size={30}
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
            </div>
            <div className="md:col-span-6 col-span-1 p-4">
                <div className="
                        flex 
                        flex-col 
                        gap-3
                    "
                >
                    <div>
                        <h3 className="text-3xl font-semibold text-[#922049] truncate">
                            {title}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <Image
                                    src={validateURLAvatar(idUserToNavigation ? idUserToNavigation.imgUrl : "/images/avatar.jpg")}
                                    alt={`avatar ${idUserToNavigation ? idUserToNavigation.id : ""}`}
                                    width={50}
                                    height={50}
                                    className="object-cover w-14 h-14 rounded-full border border-primary-blue-cus"
                                />
                            </div>
                            <div className="text-xl text-gray-600 font-medium">
                                {idUserToNavigation && validateName(idUserToNavigation.fullName)}
                            </div>
                        </div>
                        <div className="flex-nowrap text-2xl font-semibold text-primary-blue-cus">
                            {formatMoney(new Decimal(formattedSlots && formattedSlots.length > 0 ? formattedSlots[0].priceSlot : 0))} đ/h
                        </div>
                    </div>
                    <div className="text-lg text-gray-500 line-clamp-2 min-h-[3rem]">
                        Mô tả ngắn: {validateDes(contentPost)}
                    </div>
                    <div className="space-x-1 text-lg text-gray-500">
                        <span>Địa điểm sân:</span>
                        <span className="font-semibold text-black">
                            {validateAddress(addressSlot)}
                        </span>
                    </div>
                    <div className="flex space-x-1 text-lg text-gray-500">
                        <span>Ngày:</span>
                        <span className="font-semibold text-black">
                            {formattedSlots && formattedSlots.length > 0 ? formattedSlots[0].date : ""}
                        </span>
                    </div>
                    <div className="flex space-x-1 text-lg text-gray-500">
                        <span>Thời gian mở cửa:</span>
                        <span className="font-semibold text-black">
                            <FormatTime timeString={formattedSlots && formattedSlots.length > 0 ?
                                formattedSlots[0].startTime :
                                "00:00"
                            } />
                            -
                            <FormatTime timeString={formattedSlots && formattedSlots.length > 0 ?
                                formattedSlots[0].endTime :
                                "00:00"
                            } />
                        </span>
                    </div>
                    <div className="flex space-x-1 text-lg text-gray-500">
                        <span>Chỗ:</span>
                        <span className="font-semibold text-black">
                            {formattedSlots && formattedSlots.length > 0 ? formattedSlots[0].available : 0}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductContent