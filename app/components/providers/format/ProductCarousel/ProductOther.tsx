"use client"

import { ListProduct } from "@/types";
import Image from "next/image"
import Link from "next/link";
import { formatDateFunc, formatMoney, FormatTime, getDates, GetFirstDate } from "@/utils"
import {
    validateAddress,
    validateDate,
    validateDes,
    validateName,
    validateTitle,
    validateURLAvatar,
    validateURLProduct
} from "@/utils";
import { Tooltip } from 'react-tooltip';
import Cookies from "js-cookie";

const ProductOther: React.FC<ListProduct> = ({
    id,
    title,
    idUserToNavigation,
    addressSlot,
    contentPost,
    days,
    endTime,
    imgUrl,
    quantitySlot,
    startTime,
    flagTooltip,
    priceSlot,
    slots
}) => {
    const dates = getDates(validateDate(days))
    const availableSlot = (quantitySlot ?? 0) - (slots?.length ?? 0)

    return (
        <div className="relative">
            <div className="
                    relative
                    rounded-xl
                    border-2
                    border-black
                    border-opacity-10
                    cursor-pointer
                    transition-all
                    duration-500
                    shadow-sm
                    z-20
                "
                key={id ?? "1"}
            >
                <Link href={`/detail-badminton/${id ?? "1"}`}>
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
                            {!imgUrl ? (
                                <Image
                                    src="/images/item_1.jpg"
                                    alt={`product ${id ?? "1"}`}
                                    className="
                                        rounded-t-xl
                                        hover:rounded-t-xl
                                        object-cover
                                    "
                                    fill
                                    priority={true}
                                    draggable="false"
                                />
                            ) : (
                                <Image
                                    src={validateURLProduct(imgUrl[1].src)}
                                    alt={`product ${id ?? "1"}`}
                                    className="
                                        rounded-t-xl
                                        hover:rounded-t-xl
                                        object-cover
                                    "
                                    fill
                                    priority={true}
                                    draggable="false"
                                />
                            )}
                        </div>
                    </div>
                    <div className="
                            p-4 
                            flex 
                            flex-col 
                            gap-2
                            transition-all
                            duration-500
                        "
                        data-tooltip-id={`tooltip-${id}`}
                        data-tooltip-variant="light"
                        data-tooltip-position-strategy="absolute"
                    >
                        <h1 className="
                                text-2xl 
                                font-semibold 
                                whitespace-nowrap 
                                line-clamp-1
                                transition-all
                                duration-500
                                truncate
                            "
                        >
                            {validateTitle(title)}
                        </h1>
                        {!idUserToNavigation ? (
                            <div className="flex flex-row space-x-2 items-center">
                                <span>
                                    <Image
                                        src="/images/avatar.jpg"
                                        alt="avatar"
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                </span>
                                <span className="text-gray-600 font-semibold text-xl">
                                    Shi
                                </span>
                            </div>
                        ) : (
                            <div className="flex flex-row space-x-2 items-center">
                                <span>
                                    <Image
                                        src={validateURLAvatar(idUserToNavigation.imgUrl)}
                                        alt={`avatar ${idUserToNavigation.id}`}
                                        width={50}
                                        height={50}
                                        className="rounded-full"
                                    />
                                </span>
                                <span className="text-gray-600 font-semibold text-xl truncate">
                                    {validateName(idUserToNavigation.userName)}
                                </span>
                            </div>
                        )}
                        <p className="text-gray-500 line-clamp-4 min-h-[6rem]">
                            Mô tả ngắn: {validateDes(contentPost)}
                        </p>
                        <div className="space-x-1 line-clamp-1 whitespace-nowrap md:block hidden truncate">
                            <span className="text-gray-500">
                                Địa điểm sân:
                            </span>
                            <span className="text-black font-semibold">
                                {validateAddress(addressSlot)}
                            </span>
                        </div>
                        <div className="space-x-3 line-clamp-1 whitespace-nowrap md:hidden block truncate">
                            <span className="text-gray-500">
                                Địa điểm sân:
                            </span>
                            <span className="text-black font-semibold">
                                TP.Hồ Chí Minh, Quận 9, P.Long Mỹ Thạnh, CBL dsds sdsddsadasdasd
                            </span>
                        </div>
                        <div className="whitespace-nowrap line-clamp-1 space-x-3 md:space-x-8">
                            <span className='text-gray-500'>
                                Thời gian:
                            </span>
                            <span className="text-black font-semibold">
                                <FormatTime timeString={startTime ?? "00:00"} /> AM -
                                <FormatTime timeString={endTime ?? "00:00"} /> PM
                            </span>
                        </div>
                        <div className="space-x-7 line-clamp-1 whitespace-nowrap md:block hidden truncate">
                            <span className="text-gray-500">
                                Ngày chơi:
                            </span>
                            <span className="text-black font-semibold">
                                <GetFirstDate dateString={validateDate(days)} />
                            </span>
                        </div>
                        <div className="space-x-3 line-clamp-1 whitespace-nowrap md:hidden block truncate">
                            <span className="text-gray-500">
                                Ngày chơi cụ thể:
                            </span>
                            {dates.map((date, index) => (
                                <span className="text-black font-semibold" key={index}>
                                    {date}
                                </span>
                            ))}

                        </div>
                        <div className="flex flex-row md:flex-none space-x-10 md:justify-normal transition-all duration-500">
                            <div className="
                                text-gray-500 
                                line-clamp-1
                                md:space-x-[4.5rem]
                                space-x-3
                            "
                            >
                                <span>
                                    Chỗ:
                                </span>
                                <span className="text-black font-semibold">
                                    {quantitySlot ?? 0}
                                </span>
                            </div>
                            <div className="
                                    text-gray-500 
                                    line-clamp-1
                                    space-x-3
                                    md:hidden
                                    block
                                "
                            >
                                <span>
                                    Số chỗ còn trống:
                                </span>
                                <span className="text-black font-semibold">
                                    8
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            {flagTooltip && (
                <Tooltip
                    id={`tooltip-${id}`}
                    place="right"
                    border={"1px #0000001A solid"}
                    style={{
                        maxWidth: "25rem",
                        zIndex: "99999",
                    }}
                    positionStrategy="absolute"
                >
                    <div className="relative flex flex-col p-2 h-full gap-2 text-lg z-50">
                        <div className="flex flex-row justify-between font-semibold text-xl text-primary-blue-cus">
                            <span>
                                {dates.length} buổi
                            </span>
                            <span>
                                {formatMoney(priceSlot ?? 0)}VNĐ/1 chỗ
                            </span>
                        </div>
                        <div className="space-x-1 line-clamp-3 min-h-[5.25rem]">
                            <span className="text-gray-600">
                                Địa điểm chi tiết:
                            </span>
                            <span className="text-gray-500">
                                TP.Hồ Chí Minh, Quận 9, P.Long Mỹ Thạnh, {validateAddress(addressSlot)}
                            </span>
                        </div>
                        <div className="flex flex-col gap-1 min-h-[8.75rem]">
                            <div className="text-gray-600">
                                Ngày chơi cụ thể:
                            </div>
                            {dates.slice(0, 3).map((date, index) => (
                                <div key={index} className="text-gray-500 truncate">
                                    - {formatDateFunc(date)}
                                </div>
                            ))}
                            {dates.length > 3 && <div className="text-gray-500">...</div>}
                        </div>
                        <div className="space-x-1">
                            <span className="text-gray-600">
                                Số chỗ còn trống:
                            </span>
                            <span>
                                {availableSlot}
                            </span>
                        </div>
                    </div>
                </Tooltip>
            )}
        </div>
    )
}

export default ProductOther