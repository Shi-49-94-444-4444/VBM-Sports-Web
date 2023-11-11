"use client"

import { useSuccessPaymentModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button } from "../form"
import { useRouter } from "next/navigation"

const ModalSuccessPayment = ({ tran_id }: { tran_id: string }) => {
    const router = useRouter()
    const successPaymentModal = useSuccessPaymentModal()

    const handleBackHome = () => {
        router.push("/")
        successPaymentModal.onClose()
    }

    return (
        <CustomModal
            isOpen={successPaymentModal.isOpen}
            onClose={successPaymentModal.onClose}
            width="w-auto"
            height="h-auto"
        >
            <form className="flex flex-col px-10 pb-5 gap-3 justify-center items-center">
                <Image
                    src="/images/success.png"
                    alt="success"
                    height={200}
                    width={200}
                    className="object-cover w-24 h-24"
                />
                <label className="text-black font-semibold text-3xl truncate">Thanh toán thành công</label>
                <p className="text-gray-500 font-normal text-base px-5">Vui lòng xem lại các thanh toán của bạn hoặc có bất kì thắc mắc, vui lòng liên hệ bộ phận hỗ trợ của chúng tôi để được giải đáp sớm nhất.</p>
                <div className="flex flex-row gap-5">
                    <Button
                        title="Xem chi tiết"
                        color="border-primary-blue-cus bg-white"
                        text="text-primary-blue-cus"
                        style="py-3 px-8"
                        onClick={handleBackHome}
                    />
                    <Button
                        title="Trở lại trang chủ"
                        isHover={false}
                        style="py-3 px-8"
                        onClick={handleBackHome}
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalSuccessPayment