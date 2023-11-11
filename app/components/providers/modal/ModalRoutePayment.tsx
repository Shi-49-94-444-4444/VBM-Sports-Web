"use client"

import { useRoutePaymentModal } from "@/hooks"
import CustomModal from "./Modal"
import { Button } from "../form"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { deleteTransactionService } from "@/services"

const ModalRoutePayment = ({ tran_id }: { tran_id: string }) => {
    const router = useRouter()
    const routePaymentModal = useRoutePaymentModal()

    const { setTransactionId, routeUrl } = useContext(GlobalContext) || {}

    const handleRoute = async () => {
        await deleteTransactionService({ tran_id: Number(tran_id) })
        if (setTransactionId) setTransactionId(null)
        localStorage.removeItem("transactionId")
        if (routeUrl) router.push(routeUrl)
    }

    return (
        <CustomModal
            isOpen={routePaymentModal.isOpen}
            onClose={routePaymentModal.onClose}
            width="w-auto"
            height="h-auto"
        >
            <form className="flex flex-col px-10 pb-5 gap-3 justify-center items-center">
                <label className="text-black font-semibold text-3xl truncate">Bạn có chắc chắn muốn rời khỏi?</label>
                <div className="flex flex-row gap-5 pt-5">
                    <Button
                        title="Không"
                        color="border-primary-blue-cus bg-white"
                        text="text-primary-blue-cus"
                        style="py-3 px-8"
                        onClick={routePaymentModal.onClose}
                    />
                    <Button
                        title="Có"
                        isHover={false}
                        style="py-3 px-8"
                        onClick={handleRoute}
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalRoutePayment