"use client"

import { useCheckPostModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button } from "../form"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { LoadingActionPayment } from "../loader"
import { postBadmintonService } from "@/services"
import { toast } from "react-toastify"
import { mutate } from "swr"

const ModalCheckPost = () => {
    const router = useRouter()
    const { setIsLoadingModal, isLoadingModal } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()
    const checkPostModal = useCheckPostModal()

    const onSubmit = async () => {
        if (setIsLoadingModal) setIsLoadingModal(true)

        if (checkPostModal.value) {
            const res = await postBadmintonService(checkPostModal.value)

            if (res.data == null) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoadingModal) setIsLoadingModal(true)
                return
            }

            toast.success("Đăng bài thành công", {
                position: toast.POSITION.TOP_RIGHT
            })

            mutate(`/api/posts/${checkPostModal.value.id}/post_suggestion`)
            router.push("/")
        }

        if (setIsLoadingModal) setIsLoadingModal(false)
    }

    if (isLoadingModal) {
        return <LoadingActionPayment loading={isLoadingModal} />
    }

    return (
        <CustomModal
            isOpen={checkPostModal.isOpen}
            onClose={checkPostModal.onClose}
            width="md:w-auto w-full"
            height="h-auto"
        >
            <form className="flex flex-col md:px-10 pb-5 gap-5 justify-center items-center" onSubmit={handleSubmit(onSubmit)}>
                <Image
                    src="/images/pay.png"
                    alt="error"
                    height={200}
                    width={200}
                    className="object-contain w-20 h-16"
                />
                <label className="text-gray-600 font-semibold text-3xl truncate">Tiếp tục</label>
                <p className="text-gray-500 font-normal text-base px-5">{checkPostModal.message}</p>
                <p className="text-gray-500 font-normal text-base px-5">Bạn sẽ trả phí trong lượt đăng này?</p>
                <div className="flex flex-row gap-5">
                    <Button
                        title="Bỏ qua"
                        color="border-primary-blue-cus bg-white"
                        text="text-primary-blue-cus"
                        style="py-3 px-8"
                        onClick={checkPostModal.onClose}
                    />
                    <Button
                        title="Đồng ý"
                        isHover={false}
                        style="py-3 px-8"
                        type="submit"
                    />
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalCheckPost