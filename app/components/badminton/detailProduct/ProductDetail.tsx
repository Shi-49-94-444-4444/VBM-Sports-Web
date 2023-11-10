"use client"

import { ProductDetailContentData } from "@/types"
import { Button } from "../../providers"
import { useRouter } from "next/navigation";
import { FormatTime, parseSlots, validateAddress } from "@/utils";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "@/contexts";
import { buySlotService, checkSlotService } from "@/services";
import { toast } from "react-toastify";

const ProductDetail: React.FC<ProductDetailContentData> = ({
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
        setSelectedSlots(prevState => {
            if (isChecked) {
                return {
                    ...prevState,
                    [date]: 1
                }
            } else {
                const { [date]: _, ...rest } = prevState;
                return rest;
            }
        })
    }

    const handleInputChange = (date: string, value: number) => {
        const slot = DateSlot.find(item => item.date === date)?.slot || 0
        if (value > slot) {
            toast.error(`Bạn chỉ có thể nhập tối đa ${slot}`, {
                position: toast.POSITION.TOP_RIGHT
            })
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

    const onSubmit = async () => {
        if (setIsLoading) setIsLoading(true)

        for (const date in selectedSlots) {
            const slot = selectedSlots[date]

            console.log(slot, date)
            
            if (!date || slot === 0) {
                toast.error("Phải chọn ngày và chỗ", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (id && user && user.id) {
                const availableSlot = await checkSlotService({
                    userId: user.id,
                    numberSlot: slot,
                    postId: id,
                    dateRegis: date
                })

                if (availableSlot.data == null) {
                    toast.error(`Chỗ đặt của ${date} không còn đủ`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(true)
                    return
                }

                const res = await buySlotService({
                    idUser: user.id,
                    idSlot: availableSlot.data.slotsId
                })

                if (res.data == null) {
                    toast.error("Đặt chỗ thất bại", {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(true)
                    return
                }

                toast.success("Đặt chỗ thành công", {
                    position: toast.POSITION.TOP_RIGHT
                })

                router.push(`/product/payment/${res.data.tranSactionId}`)
            }
        }

        if (setIsLoading) setIsLoading(true)
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
            onSubmit={handleSubmit(onSubmit)}
        >
            <section className="relative space-x-3 text-lg">
                <span className="whitespace-nowrap font-semibold text-gray-600">
                    Địa chỉ:
                </span>
                <span className="break-words font-semibold">
                    {validateAddress(addressSlot)}
                </span>
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
                type="submit"
            />
        </form>
    )
}

export default ProductDetail