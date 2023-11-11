"use client"

import { useFailPaymentModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button } from "../form"
import { useRouter } from "next/navigation"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { deleteTransactionService } from "@/services"

const ModalFailPayment = ({ tran_id }: { tran_id: string }) => {
    const router = useRouter()
    const failPaymentModal = useFailPaymentModal()
    const { setTransactionId } = useContext(GlobalContext) || {}

    const handleBackHome = async () => {
        await deleteTransactionService({ tran_id: Number(tran_id) })
        if (setTransactionId) setTransactionId(null)
        localStorage.removeItem("transactionId")
        router.push("/")
        failPaymentModal.onClose()
    }

    return (
        <CustomModal
            isOpen={failPaymentModal.isOpen}
            onClose={failPaymentModal.onClose}
            width="w-auto"
            height="h-auto"
        >
            <form className="flex flex-col px-10 pb-5 gap-3 justify-center items-center">
                <Image
                    src="/images/error.png"
                    alt="error"
                    height={200}
                    width={200}
                    className="object-cover w-24 h-24"
                />
                <label className="text-black font-semibold text-3xl truncate">Thanh toán không thành công</label>
                <p className="text-gray-500 font-normal text-base px-5">Vui lòng kiểm tra lại tài khoản ngân hàng hoặc quá thời gian thanh toán. Nếu có bất kì thắc mắc nào vui lòng liên hệ bộ phận hỗ trợ khách hàng để giải đáp thắc mắc.</p>
                <div className="flex flex-row gap-5">
                    <Button
                        title="Quay lại trang chủ"
                        color="border-primary-blue-cus bg-white"
                        text="text-primary-blue-cus"
                        style="py-3 px-8"
                        onClick={handleBackHome}
                    />
                    <Button
                        title="Trở lại thanh toán"
                        isHover={false}
                        style="py-3 px-8"
                        onClick={failPaymentModal.onClose}
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalFailPayment