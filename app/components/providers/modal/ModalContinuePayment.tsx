"use client"

import { GlobalContext } from "@/contexts"
import { useForm } from "react-hook-form"
import { WalletService, deleteTransactionService, transactionStatusService } from "@/services"
import Decimal from "decimal.js"
import { useContinuePaymentModal, useFailPaymentModal, useNotEnoughMoneyModal, useSuccessPaymentModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button } from "../form"
import { useContext } from "react"
import { LoadingActionPayment } from "../loader"

const ModalContinuePayment = ({ total, tran_id }: { total: string, tran_id: string }) => {
    const { user, setUser, setTransactionId, setIsLoading, isLoading } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()
    const notEnoughMoneyModal = useNotEnoughMoneyModal()
    const continuePaymentModal = useContinuePaymentModal()
    const failPaymentModal = useFailPaymentModal()
    const successPaymentModal = useSuccessPaymentModal()

    const onSubmit = async () => {
        if (setIsLoading) setIsLoading(true)

        if (user && user.id) {
            const res = await WalletService({
                id: user.id,
                money: -Number(new Decimal(total))
            })

            if (res.data == null) {
                continuePaymentModal.onClose()
                notEnoughMoneyModal.onOpen()
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (setUser) {
                setUser(prevUser => {
                    const updatedUser = { ...prevUser, balance: res.data.newBalance }
                    localStorage.setItem("user", JSON.stringify(updatedUser))
                    return updatedUser
                })
            }

            const status = await transactionStatusService({
                tran_id: Number(tran_id),
                status_info: 1
            })

            if (status.data == null) {
                continuePaymentModal.onClose()
                failPaymentModal.onOpen()
                if (setIsLoading) setIsLoading(false)
                return
            }

            await deleteTransactionService({ tran_id: Number(tran_id) })
            if (setTransactionId) setTransactionId(null)
            localStorage.removeItem("transactionID")

            continuePaymentModal.onClose()
            successPaymentModal.onOpen()
        } else {
            const status = await transactionStatusService({
                tran_id: Number(tran_id),
                status_info: 2
            })

            if (status.data == null) {
                continuePaymentModal.onClose()
                failPaymentModal.onOpen()
                if (setIsLoading) setIsLoading(false)
                return
            }

            continuePaymentModal.onClose()
            failPaymentModal.onOpen()
            if (setIsLoading) setIsLoading(false)
            return
        }

        if (setIsLoading) setIsLoading(false)
    }

    if (isLoading) {
        return <LoadingActionPayment loading={isLoading} />
    }

    return (
        <CustomModal
            isOpen={continuePaymentModal.isOpen}
            onClose={continuePaymentModal.onClose}
            width="w-auto"
            height="h-auto"
        >
            <form className="flex flex-col px-10 pb-5 gap-3 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
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