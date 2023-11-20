"use client"

import { useAdminBanModal } from "@/hooks"
import CustomModal from "./Modal"
import { Button } from "../form"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { adminBanUserService } from "@/services"
import { toast } from "react-toastify"
import { LoadingActionWallet } from "../loader"

const ModalAdminBan = ({ user_id }: { user_id: string }) => {
    const adminBanModal = useAdminBanModal()
    const { user, setIsLoadingModal, isLoadingModal } = useContext(GlobalContext) || {}

    const handleBanUser = async () => {
        if (setIsLoadingModal) setIsLoadingModal(true)

        if (user && user.id) {
            const res = await adminBanUserService({
                admin_id: user.id,
                user_id: user_id
            })

            if (res.data == null) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                adminBanModal.onClose()
                if (setIsLoadingModal) setIsLoadingModal(false)
                return
            }

            toast.success("Khóa tài khoản thành công", {
                position: toast.POSITION.TOP_RIGHT
            })
            adminBanModal.onClose()
        }

        if (setIsLoadingModal) setIsLoadingModal(false)
    }

    if (isLoadingModal) {
        return <LoadingActionWallet loading={isLoadingModal} />
    }

    return (
        <CustomModal
            isOpen={adminBanModal.isOpen}
            onClose={adminBanModal.onClose}
            width="w-auto"
            height="h-auto"
        >
            <form className="flex flex-col px-10 pb-5 gap-3 justify-center items-center">
                <label className="text-black font-semibold text-3xl truncate">Bạn có muốn khóa tài khoản này không?</label>
                <div className="flex flex-row gap-5 pt-5">
                    <Button
                        title="Không"
                        color="border-primary-blue-cus bg-white"
                        text="text-primary-blue-cus"
                        style="py-3 px-8"
                        onClick={adminBanModal.onClose}
                    />
                    <Button
                        title="Có"
                        isHover={false}
                        style="py-3 px-8"
                        onClick={handleBanUser}
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalAdminBan