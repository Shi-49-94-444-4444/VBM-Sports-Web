"use client"

import { GlobalContext } from "@/contexts"
import { useForm } from "react-hook-form"
import { bookingService, joinChatRoomService } from "@/services"
import { useContinuePaymentModal, useFailPaymentModal, useFeaturingModal, useSuccessPaymentModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button } from "../form"
import { useContext } from "react"
import { LoadingActionPayment } from "../loader"

const ModalContinuePayment = () => {
    const { user, setIsLoadingModal, isLoadingModal, setFetchUser } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()
    const continuePaymentModal = useContinuePaymentModal()
    const failPaymentModal = useFailPaymentModal()
    const successPaymentModal = useSuccessPaymentModal()
    const featuringModal = useFeaturingModal()

    //console.log(continuePaymentModal.slotsIdArray, continuePaymentModal.post_id, continuePaymentModal.checkedMethod)

    const onSubmit = async () => {
        if (setIsLoadingModal) setIsLoadingModal(true)

        if (continuePaymentModal.checkedMethod) {
            continuePaymentModal.onClose()
            featuringModal.onOpen()
            if (setIsLoadingModal) setIsLoadingModal(false)
            return
        }

        if (user && user.id && continuePaymentModal.post_id) {
            const res = await bookingService({
                userId: user.id,
                postId: continuePaymentModal.post_id,
                slotsInfo: continuePaymentModal.slotsIdArray,
                isVnpay: true
            })

            //console.log(res)

            if (res.data == null) {
                if (setIsLoadingModal) setIsLoadingModal(false)
                continuePaymentModal.onClose()
                failPaymentModal.onOpen(res.message)
                return
            }

            for (let i = 0; i < res.data.chatInfos.length; i++) {
                await joinChatRoomService({ user_id: user.id, room_id: res.data.chatInfos[i].roomId })
            }
            continuePaymentModal.onClose()
            if (setFetchUser) setFetchUser(true)
            successPaymentModal.onOpen(res.data.transactionId)
        }

        if (setIsLoadingModal) setIsLoadingModal(false)
    }

    if (isLoadingModal) {
        return <LoadingActionPayment loading={isLoadingModal} />
    }

    return (
        <CustomModal
            isOpen={continuePaymentModal.isOpen}
            onClose={continuePaymentModal.onClose}
            width="md:w-auto w-full"
            height="h-auto"
        >
            <form className="flex flex-col md:px-10 pb-5 gap-5 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <Image
                    src="/images/pay.png"
                    alt="error"
                    height={200}
                    width={200}
                    className="object-contain w-20 h-16"
                />
                <label className="text-black font-semibold text-3xl truncate">Bạn có muốn thanh toán không</label>
                <div className="flex flex-row gap-5">
                    <Button
                        title="Không"
                        color="border-primary-blue-cus bg-white"
                        text="text-primary-blue-cus"
                        style="py-3 px-8"
                        onClick={continuePaymentModal.onClose}
                    />
                    <Button
                        title="Có"
                        isHover={false}
                        style="py-3 px-8"
                        type="submit"
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalContinuePayment