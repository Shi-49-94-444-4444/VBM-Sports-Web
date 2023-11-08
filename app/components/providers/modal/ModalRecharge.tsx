"use client"

import { useRechargeModal } from "@/hooks"
import CustomModal from "./Modal"
import Image from "next/image"
import { Button, Input } from "../form"
import { useForm } from "react-hook-form"
import { WalletFrom } from "@/types"
import { yupResolver } from "@hookform/resolvers/yup"
import { walletSchema } from "@/utils"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { WalletService } from "@/services"
import { toast } from "react-toastify"
import { LoadingAction } from "../loader"

const ModalRecharge = () => {
    const rechargeModal = useRechargeModal()

    const { user, setIsLoading, isLoading, setUser } = useContext(GlobalContext) || {}

    const { register, handleSubmit, formState: { errors } } = useForm<WalletFrom>({
        resolver: yupResolver(walletSchema)
    })

    const onSubmit = async (data: WalletFrom) => {
        if (setIsLoading) setIsLoading(true)

        if (user && user.id) {
            const res = await WalletService({
                id: user.id,
                money: data.money
            })

            console.log(res)

            if (res.data == null) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            } 

            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })

            if (setUser) {
                setUser(prevUser => {
                    const updatedUser = { ...prevUser, balance: res.data.newBalance }
                    localStorage.setItem("user", JSON.stringify(updatedUser))
                    return updatedUser
                })
            }

            rechargeModal.onClose()
            
            if (setIsLoading) setIsLoading(false)
        }
    }

    if (isLoading) {
        return <LoadingAction loading={isLoading} />
    }

    return (
        <CustomModal
            isOpen={rechargeModal.isOpen}
            onClose={rechargeModal.onClose}
            title="Nhập chi tiết giao dịch"
            width="w-full lg:w-2/4 md:3/4 max-w-full"
            height="h-auto"
        >
            <div className="relative flex flex-col justify-center items-center gap-5 py-5">
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
                <form className="relative flex flex-col gap-3 w-full px-2 md:px-10" onSubmit={handleSubmit(onSubmit)}>
                    <label className="text-gray-600 text-xl font-semibold text-left">
                        Nhập số tiền cần nạp:
                    </label>
                    <Input
                        isMoney
                        colorInput="w-full bg-[#F5F5F5] text-gray-600 text-xl"
                        id="money"
                        type="number"
                        register={register}
                        name="money"
                        errors={errors}
                    />
                    <div className="relative flex self-end">
                        <Button
                            title="Đồng ý"
                            style="py-3 px-12"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </CustomModal>
    )
}

export default ModalRecharge