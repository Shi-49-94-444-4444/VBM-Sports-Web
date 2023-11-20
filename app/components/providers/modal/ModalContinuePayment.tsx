"use client"

import { GlobalContext } from "@/contexts"
import { useForm } from "react-hook-form"
import { checkSlotService } from "@/services"
import { useContinuePaymentModal, useFailPaymentModal, useSuccessPaymentModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button } from "../form"
import { useContext } from "react"
import { LoadingActionPayment } from "../loader"

const ModalContinuePayment = () => {
    const { user, setUser, setIsLoadingModal, isLoadingModal } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()
    const continuePaymentModal = useContinuePaymentModal()
    const failPaymentModal = useFailPaymentModal()
    const successPaymentModal = useSuccessPaymentModal()

    //console.log(continuePaymentModal.slotsIdArray, continuePaymentModal.post_id)

    const onSubmit = async () => {
        if (setIsLoadingModal) setIsLoadingModal(true)

        if (user && user.id && continuePaymentModal.post_id) {
            const res = await checkSlotService({
                userId: user.id,
                postId: continuePaymentModal.post_id,
                slotsInfo: continuePaymentModal.slotsIdArray
            })

            //console.log(res)
            
            if (res.data == null) {
                if (setIsLoadingModal) setIsLoadingModal(false)
                continuePaymentModal.onClose()
                failPaymentModal.onOpen(res.message)
                return
            }

            continuePaymentModal.onClose()
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
            width="w-auto"
            height="h-auto"
        >
            <form className="flex flex-col px-10 pb-5 gap-5 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
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