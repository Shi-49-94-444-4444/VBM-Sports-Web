"use client"

import { useRatingModal } from "@/hooks"
import CustomModal from "../Modal"
import { RatingFilter } from "../../format"
import { Button, Input } from "../../form"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { RatingFormData } from "@/types"
import { toast } from "react-toastify"
import { postRatingService } from "@/services"

const ModalRating = () => {
    const ratingModal = useRatingModal()
    const [level, setLevel] = useState<Number>(0)
    const [friendly, setFriendly] = useState<Number>(0)
    const [trusted, setTrusted] = useState<Number>(0)
    const [helpful, setHelpful] = useState<Number>(0)
    const { register, handleSubmit } = useForm<RatingFormData>()

    const idUserRate = ratingModal.idUserRate
    const idUserRated = ratingModal.idUserRated
    const idTransaction = ratingModal.idTransaction

    const onSubmit = async (data: RatingFormData) => {
        if (level === 0 || friendly === 0 || trusted === 0 || helpful === 0) {
            toast.error("Vui lòng đánh giá", {
                position: toast.POSITION.TOP_RIGHT
            })
            return
        }

        if (idUserRate && idUserRated && idTransaction) {
            const res = await postRatingService({
                idUserRate: idUserRate,
                idUserRated: idUserRated,
                levelSkill: level,
                friendly: friendly,
                trusted: trusted,
                helpful: helpful,
                content: data.content,
                idTransaction: idTransaction
            })

            if (res.data === null) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                return
            }

            toast.success("Đánh giá thành công!", {
                position: toast.POSITION.TOP_RIGHT
            })
        }

        ratingModal.onClose()
        window.location.reload()
    }

    return (
        <CustomModal
            isOpen={ratingModal.isOpen}
            onClose={() => {
                ratingModal.onClose()
                window.location.reload()
            }}
            width="w-full lg:w-2/4 md:3/4 max-w-full"
            height="h-auto"
        >
            <form className="flex flex-col md:px-10 pb-5 gap-5 w-full justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-gray-600 font-semibold text-3xl truncate">Đánh giá người dùng</label>
                <div className="flex flex-col gap-3 relative w-full">
                    <div className="flex gap-5 w-full relative flex-wrap  justify-between">
                        <div className="text-2xl font-semibold">
                            Chủ sân: {ratingModal.name}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xl font-medium text-gray-gray-600 text-left justify-between">
                            <div className="grid grid-cols-2 gap-3">
                                <label className="col-span-1">Kĩ năng:</label>
                                <div className="col-span-1">
                                    <RatingFilter onChange={(rating) => { setLevel(rating) }} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="col-span-1">Thân thiện:</label>
                                <div className="col-span-1">
                                    <RatingFilter onChange={(rating) => { setFriendly(rating) }} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="col-span-1">Tin tưởng:</label>
                                <div className="col-span-1">
                                    <RatingFilter onChange={(rating) => { setTrusted(rating) }} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <label className="col-span-1">Hỗ trợ:</label>
                                <div className="col-span-1">
                                    <RatingFilter onChange={(rating) => { setHelpful(rating) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <Input
                            flagInput
                            colorInput="w-full text-xl"
                            placeholder="Nhập lời bình luận..."
                            id="content"
                            name="content"
                            register={register}
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-5 pt-5">
                    <Button
                        title="Gửi"
                        style="py-2 px-12 text-xl"
                        type="submit"
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalRating