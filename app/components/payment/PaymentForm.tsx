"use client"

import { Button } from "../providers"
import { useContinuePaymentModal } from "@/hooks"
import ModalContinuePayment from "../providers/modal/ModalContinuePayment"

const PaymentForm = ({ total, tran_id }: { total: string, tran_id: string }) => {
    const continuePaymentModal = useContinuePaymentModal()

    return (
        <div className="flex justify-center transition-all duration-500">
            <ModalContinuePayment total={total} tran_id={tran_id}/>
            <Button
                title="Thanh Toán"
                style="md:ml-auto px-32 py-4 text-xl"
                onClick={continuePaymentModal.onOpen}
            />
        </div>
    )
}

export default PaymentForm