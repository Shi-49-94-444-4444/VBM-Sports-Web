import { useWithdrawModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button, Input } from "../form"

const ModalWithdraw = () => {
    const withdrawModal = useWithdrawModal()

    return (
        <CustomModal
            isOpen={withdrawModal.isOpen}
            onClose={withdrawModal.onClose}
            title="Nhập chi tiết giao dịch"
            width="w-full md:w-3/4 max-w-full"
            height="h-auto"
        >
            <div className="relative flex flex-col justify-center items-center gap-10 py-5">
                <div className="flex items-center space-x-5">
                    <div className="relative flex-shrink-0">
                        <Image
                            src="/images/momo.png"
                            alt="momoIcon"
                            height={100}
                            width={100}
                            className="object-cover w-14 h-14"
                        />
                    </div>
                    <div className="text-2xl font-semibold text-gray-600">
                        Thanh toán momo
                    </div>
                </div>
                <form className="relative flex flex-col gap-5 w-full px-2 md:px-10">
                    <label className="text-gray-600 text-xl font-semibold text-left">
                        Nhập số tiền cần nạp:
                    </label>
                    <Input
                        isMoney
                        colorInput="w-full bg-[#F5F5F5] text-gray-600 text-xl"
                        id="withdraw"
                        type="number"
                    />
                    <div className="relative flex self-end pt-5">
                        <Button
                            title="Đồng ý"
                            style="py-3 px-12"
                        />
                    </div>
                </form>
            </div>
        </CustomModal>
    )
}

export default ModalWithdraw