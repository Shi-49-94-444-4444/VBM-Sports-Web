"use client"

import { useAdminDeletePostModal } from "@/hooks"
import CustomModal from "./Modal"
import { Button } from "../form"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { toast } from "react-toastify"
import { LoadingActionWallet } from "../loader"
import { adminDeletePostService } from "@/services"
import { mutate } from "swr"

const ModalAdminDeletePost = ({ user_id }: { user_id: string }) => {
    const adminDeletePostModal = useAdminDeletePostModal()
    const { user, setIsLoadingModal, isLoadingModal } = useContext(GlobalContext) || {}
    const post_id = adminDeletePostModal.postId

    const handleDeletePost = async () => {
        if (setIsLoadingModal) setIsLoadingModal(true)

        if (user && user.id && post_id) {
            const res = await adminDeletePostService({
                admin_id: user.id,
                post_id: post_id
            })

            if (res.data == null) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                adminDeletePostModal.onClose()
                if (setIsLoadingModal) setIsLoadingModal(false)
                return
            }

            toast.success("Xóa bài đăng thành công", {
                position: toast.POSITION.TOP_RIGHT
            })
            adminDeletePostModal.onClose()
            mutate(`/api/posts/${user_id}/managed_all_post`)
        }

        if (setIsLoadingModal) setIsLoadingModal(false)
    }

    if (isLoadingModal) {
        return <LoadingActionWallet loading={isLoadingModal} />
    }

    return (
        <CustomModal
            isOpen={adminDeletePostModal.isOpen}
            onClose={adminDeletePostModal.onClose}
            width="md:w-auto w-full"
            height="h-auto"
        >
            <form className="flex flex-col md:px-10 pb-5 gap-3 justify-center items-center">
                <label className="text-gray-600 font-semibold text-3xl truncate">Bạn có muốn xóa bài đăng này không?</label>
                <div className="flex flex-row gap-5 pt-5">
                    <Button
                        title="Không"
                        color="border-primary-blue-cus bg-white"
                        text="text-primary-blue-cus"
                        style="py-3 px-8"
                        onClick={adminDeletePostModal.onClose}
                    />
                    <Button
                        title="Có"
                        isHover={false}
                        style="py-3 px-8"
                        onClick={handleDeletePost}
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalAdminDeletePost