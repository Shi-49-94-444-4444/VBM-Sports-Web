"use client"

import { ProductDetailContentData } from "@/types"
import { Button, Loading } from "../../providers"
import { useRouter } from "next/navigation";
import { FormatTime, formatMoney, validateAddress, validateTitle } from "@/utils";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "@/contexts";
import { buySlotService, checkSlotService } from "@/services";
import { toast } from "react-toastify";
import { format, parseISO } from "date-fns";
import Decimal from "decimal.js";

const ProductDetail: React.FC<ProductDetailContentData> = ({
    id,
    addressSlot,
    levelSlot,
    categorySlot,
    slotInfos,
    title
}) => {
    const router = useRouter()
    const { user, setIsLoading, setTransactionId, isLoading } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()

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

    const handleInputChange = (date: string, value: number, item: any) => {
        if (item && item.availableSlot) {
            if (value > item.availableSlot) {
                toast.error(`Bạn chỉ có thể nhập tối đa ${item.availableSlot}`, {
                    position: toast.POSITION.TOP_RIGHT
                })
                return
            }
            setSelectedSlots(prevState => ({
                ...prevState,
                [date]: value
            }))
        }
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        if (!/^\d+$/.test(keyValue))
            event.preventDefault();
    }

    const onSubmit = async () => {
        if (setIsLoading) setIsLoading(true)

        let slotsIdArray = []

        for (const date in selectedSlots) {
            const slot = selectedSlots[date]

            //console.log(slot, date)

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

                //console.log(availableSlot)


                if (availableSlot.data == null) {
                    toast.error(`Chỗ đặt của ${date} không còn đủ`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                }

                slotsIdArray.push(availableSlot.data.slotsId)
            }
        }

        //console.log(slotsIdArray)

        if (id && user && user.id) {
            const res = await buySlotService({
                idUser: user.id,
                idSlot: slotsIdArray.flat()
            })

            //console.log(res)

            if (res.data == null) {
                toast.error("Đặt chỗ thất bại", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            toast.success("Đặt chỗ thành công", {
                position: toast.POSITION.TOP_RIGHT
            })

            if (setTransactionId) setTransactionId(res.data.tranSactionId)
            localStorage.setItem("transactionId", res.data.tranSactionId)
            router.push(`/product/payment/${res.data.tranSactionId}`)
        }

        if (setIsLoading) setIsLoading(false)
    }

    return (
        <form className="
                relative
                bg-gray-200
                flex 
                flex-col 
                w-full 
                rounded-xl 
                px-4
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
            <h1 className="text-3xl font-semibold text-gray-600">
                {validateTitle(title)}
            </h1>
            <section className="relative space-x-3">
                <span className="whitespace-nowrap font-semibold text-gray-600">
                    Địa chỉ:
                </span>
                <span className="break-words font-semibold">
                    {validateAddress(addressSlot)}
                </span>
            </section>
            <section className="relative font-semibold flex flex-col gap-2">
                <label className="whitespace-nowrap text-gray-600">
                    Chọn chỗ đặt:
                </label>
                {slotInfos && slotInfos.map((item, index) => {
                    const date = format(parseISO(item.startTime), 'dd/MM/yyyy')
                    const startTime = format(parseISO(item.startTime), 'HH:mm')
                    const endTime = format(parseISO(item.endTime), 'HH:mm')

                    return (
                        <div className="break-words flex flex-wrap items-center gap-2 border border-black border-opacity-10 rounded-lg p-2" key={index}>
                            <input
                                type="checkbox"
                                onChange={(e) => handleCheckboxChange(date, e.target.checked)}
                                className="ring-0 outline-none focus:ring-0 focus:outline-none"
                            />
                            <span>
                                {date}
                            </span>
                            <span>
                                <FormatTime timeString={startTime} /> - <FormatTime timeString={endTime} />
                            </span>
                            <span className="text-primary-blue-cus">
                                {formatMoney(new Decimal(item.price))}/Chỗ
                            </span>
                            <section className="flex space-x-1 items-center">
                                <span>-</span>
                                <label>
                                    Số chỗ đặt:
                                </label>
                                <input
                                    type="number"
                                    pattern="^(0|[1-9][0-9]*)$"
                                    min={selectedSlots[date] || 0}
                                    max={item.availableSlot}
                                    value={selectedSlots[date] || 0}
                                    disabled={!selectedSlots[date]}
                                    onChange={(e) => handleInputChange(date, Number(e.target.value), item)}
                                    onKeyPress={handleKeyPress}
                                    className={`px-1 py-1 w-8 text-center ${selectedSlots[date] ? '' : 'cursor-not-allowed bg-gray-300'}`}
                                />
                                <span>
                                    /{item.availableSlot}
                                </span>
                            </section>
                        </div>
                    )
                })}
            </section>
            <section className="relative flex gap-3 font-semibold">
                <label className="whitespace-nowrap text-gray-600">
                    Thể loại:
                </label>
                <span className="break-words">
                    {categorySlot ?? "Chưa có"}
                </span>
            </section>
            <section className="relative flex gap-3 font-semibold">
                <label className="whitespace-nowrap text-gray-600">
                    Kĩ năng:
                </label>
                <span className="break-words">
                    {levelSlot ?? "Chưa có"}
                </span>
            </section>
            {isLoading ? (
                <Button
                    title={<Loading loading={isLoading} color="white" />}
                    style="py-4 justify-center"
                    type="submit"
                    isHover={false}
                />
            ) : (
                <Button
                    title="Đặt chỗ ngay"
                    style="py-4 justify-center"
                    type="submit"
                />
            )}
        </form>
    )
}

export default ProductDetail