'use client'

import { QuickListOverviewProps } from "@/types"

const QuickListOverview: React.FC<QuickListOverviewProps> = ({
    title,
    price,
    timeOpen,
    timeClose,
    description,
    isOdd,
}) => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col space-y-4">
                <h1 className={`
                            text-2xl 
                            font-bold 
                            text-[#922049] 
                            ${isOdd ? 'text-left' : 'text-right'}
                        `
                    }
                >
                    {title}
                </h1>
                <h2 className={`
                            text-xl 
                            font-semibold 
                            ${isOdd ? 'text-left' : 'text-right'}
                        `
                    }
                >
                    {price}đ/h
                </h2>
                <div className={`
                            flex text-xl 
                            font-medium gap-5 
                            ${isOdd ? 'justify-start' : 'justify-end'}
                        `
                    }
                >
                    <div className="whitespace-nowrap">
                        Thời gian mở cửa:
                    </div>
                    <div className="font-semibold">
                        {timeOpen} AM - {timeClose} PM
                    </div>
                </div>
                <div className={`
                            flex text-xl 
                            font-medium 
                            gap-1 
                            ${isOdd ? 'justify-start' : 'justify-end'}
                        `
                    }
                >
                    <div className={`
                                whitespace-nowrap
                                ${isOdd ? 'text-left' : 'text-right'}
                            `
                        }
                    >
                        Mô tả ngắn:
                    </div>
                    <div className={`
                                line-clamp-3
                                ${isOdd ? 'text-left' : 'text-right'}
                            `
                        }
                    >
                        {description}
                    </div>
                </div>
            </div>
            <div className={`
                        mt-auto 
                        ${isOdd ? 'self-start' : 'self-end'}
                    `
                }
            >
                <button className="
                        uppercase 
                        bg-navbar-cus 
                        text-white 
                        items-center 
                        text-sm 
                        font-semibold 
                        justify-center 
                        py-2 
                        px-12 
                        rounded-full
                    "
                >
                    Đặt ngay
                </button>
            </div>
        </div>
    )
}

export default QuickListOverview