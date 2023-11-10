"use client"

import { useContext } from "react"
import { Button } from "../providers"
import { GlobalContext } from "@/contexts"
import { useForm } from "react-hook-form"
import { WalletService } from "@/services"
import Decimal from "decimal.js"
import { useContinuePaymentModal, useNotEnoughMoneyModal } from "@/hooks"

const PaymentForm = ({ total }: { total: string }) => {
    const { user, setUser, setIsLoading } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()
    const notEnoughMoneyModal = useNotEnoughMoneyModal()
    const continuePaymentModal = useContinuePaymentModal()

    const onSubmit = async () => {
        if (setIsLoading) setIsLoading(true)

        notEnoughMoneyModal.onOpen()

        // if (user && user.id) {
        //     const res = await WalletService({
        //         id: user.id,
        //         money: -Number(new Decimal(total))
        //     })

        //     if (res.data == null) {

        //         return
        //     }
        // }

        if (setIsLoading) setIsLoading(false)
    }

    return (
        <form className="flex justify-center transition-all duration-500" onSubmit={handleSubmit(onSubmit)}>
            <Button
                title="Thanh Toán"
                style="md:ml-auto px-32 py-4 text-xl"
                onClick={continuePaymentModal.onOpen}
            />
        </form>
    )
}

export default PaymentForm