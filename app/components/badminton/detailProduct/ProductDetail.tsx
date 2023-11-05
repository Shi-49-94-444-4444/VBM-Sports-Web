"use client"

import { ProductDetailContent } from "@/types"
import { Button } from "../../providers"
import { useRouter } from "next/navigation";
import { FormatTime, parseSlots, validateAddress } from "@/utils";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "@/contexts";

const ProductDetail: React.FC<ProductDetailContent> = ({
    id,
    startTime,
    endTime,
    addressSlot,
    availableSlot,
    levelSlot,
    categorySlot
}) => {
    const router = useRouter()
    const { user, setIsLoading, isLoading } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()

    const DateSlot = parseSlots(availableSlot ?? [])

    const [selectedSlots, setSelectedSlots] = useState<{ [key: string]: number }>({})

    const handleCheckboxChange = (date: string, isChecked: boolean) => {
        setSelectedSlots(prevState => ({
            ...prevState,
            [date]: isChecked ? 1 : 0
        }))
    }

    const handleInputChange = (date: string, value: number) => {
        const slot = DateSlot.find(item => item.date === date)?.slot || 0
        if (value > slot) {
            alert(`Bạn chỉ có thể nhập tối đa ${slot}`)
            return
        }
        setSelectedSlots(prevState => ({
            ...prevState,
            [date]: value
        }))
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/^\d+$/.test(keyValue))
            event.preventDefault();
    }

    const onSubmit = () => {
        
        router.push(`/product/payment/${id}`)
    }

    return (
        <form className="
                relative
                bg-gray-200 
                flex 
                flex-col 
                w-full 
                rounded-xl 
                p-6 
                gap-3
                justify-around
                transition-all
                duration-500
                lg:min-h-[30rem]
                max-h-auto
            "
            key={id ?? "1"}
        >
            <section className="relative flex gap-3 text-lg">
                <label className="whitespace-nowrap font-semibold text-gray-600">
                    Địa chỉ:
                </label>
                <p className="break-words font-semibold">
                    {validateAddress(addressSlot)}
                </p>
            </section>
            <section className="flex flex-wrap relative gap-3 text-lg font-semibold">
                <label className="whitespace-nowrap text-gray-600">
                    Thời gian:
                </label>
                <div className="flex space-x-1">
                    <span>
                        <FormatTime timeString={startTime ?? "00:00"} />
                    </span>
                    <span>
                        -
                    </span>
                    <span>
                        <FormatTime timeString={endTime ?? "00:00"} />
                    </span>
                </div>
            </section>
            <section className="relative text-lg font-semibold flex flex-col gap-2">
                <label className="whitespace-nowrap text-gray-600">
                    Vị trí còn trống:
                </label>
                {DateSlot.map((item, index) => (
                    <div className="break-words flex flex-wrap items-center gap-2" key={index}>
                        <input
                            type="checkbox"
                            onChange={(e) => handleCheckboxChange(item.date, e.target.checked)}
                            className="ring-0 outline-none focus:ring-0 focus:outline-none"
                        />
                        <span>
                            {item.date}
                        </span>
                        <section className="flex space-x-1 items-center">
                            <span>-</span>
                            <label>
                                Số chỗ đặt:
                            </label>
                            <input
                                type="number"
                                pattern="^(0|[1-9][0-9]*)$"
                                min={selectedSlots[item.date] || 0}
                                max={item.slot}
                                value={selectedSlots[item.date] || 0}
                                disabled={!selectedSlots[item.date]}
                                onChange={(e) => handleInputChange(item.date, Number(e.target.value))}
                                onKeyPress={handleKeyPress}
                                className={`px-1 py-1 w-10 text-center ${selectedSlots[item.date] ? '' : 'cursor-not-allowed bg-gray-300'}`}
                            />
                            <span>
                                /{item.slot}
                            </span>
                        </section>
                    </div>
                ))}
            </section>
            <section className="relative flex gap-3 text-lg font-semibold">
                <label className="whitespace-nowrap text-gray-600">
                    Thể loại:
                </label>
                <span className="break-words">
                    {categorySlot ?? "null"}
                </span>
            </section>
            <section className="relative flex gap-3 text-lg font-semibold">
                <label className="whitespace-nowrap text-gray-600">
                    Kĩ năng:
                </label>
                <span className="break-words">
                    {levelSlot ?? "null"}
                </span>
            </section>
            <Button
                title="Đặt chỗ ngay"
                style="py-4 justify-center"
                onClick={onSubmit}
            />
        </form>
    )
}

export default ProductDetail