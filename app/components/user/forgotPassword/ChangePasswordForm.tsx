"use client"

import { BiSolidLockAlt } from "react-icons/bi"
import { Input, Loading } from "../../providers"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts";
import { useRouter } from "next/router";
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangePasswordFormData, FormData } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePasswordService } from "@/services/forgotPassword";
import { changePasswordSchema } from "@/utils";

const ChangePasswordForm = () => {
    const [isChange, setIsChange] = useState(false)
    const {
        setIsAuthUser,
        setUser,
        setIsLoading,
        isLoading
    } = useContext(GlobalContext) || {}
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ChangePasswordFormData>({
        resolver: yupResolver(changePasswordSchema),
    });

    const onSubmit = async (data: FormData) => {
        if (setIsLoading) setIsLoading(true)

        const email = JSON.parse(localStorage.getItem("email")!)

        const res = await changePasswordService({
            email: email,
            password: data.password,
            confirmPassword: data.confirmPassword
        })

        console.log("Change: ", res)

        if (res.message === "Update Success") {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            if (setIsAuthUser) setIsAuthUser(false)
            if (setUser) setUser(null)
            localStorage.clear()
            setIsChange(true)
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }

        if (setIsLoading) setIsLoading(false)
    }

    useEffect(() => {
        if (isChange) router.push("/change-password-success")
    }, [router, isChange])

    return (
        <form className="flex flex-col gap-3 pb-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="password"
                name="password"
                register={register}
                errors={errors}
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Xác nhận mật khẩu"
                placeholder="Nhập lại mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="confirmPassword"
                name="confirmPassword"
                register={register}
                errors={errors}
            />
            <button className="
                    w-full 
                    bg-primary-blue-cus 
                    text-white 
                    font-semibold 
                    text-lg 
                    rounded-xl 
                    py-3
                        
                "
                type="submit"
            >
                {isLoading ? (
                    <Loading
                        loading={isLoading}
                        color="white"
                    />
                ) : (
                    "Tiếp theo"
                )}
            </button>
        </form>
    )
}

export default ChangePasswordForm