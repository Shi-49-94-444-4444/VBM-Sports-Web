"use client"

import { Input, Loading } from "../../providers"
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts";
import { useRouter } from "next/navigation";
import { yupResolver } from '@hookform/resolvers/yup';
import { ChangePasswordFormData, FormData } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePasswordService } from "@/services/forgotPassword";
import { changePasswordInputs, changePasswordSchema } from "@/utils";
import Cookies from "js-cookie";

const ChangePasswordForm = () => {
    const [isChange, setIsChange] = useState(false)
    const {
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

        if (res.data == null) {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            if (setIsLoading) setIsLoading(false)
            return
        }

        toast.success(res.message, {
            position: toast.POSITION.TOP_RIGHT,
        })
        localStorage.clear()
        Cookies.remove("token")
        setIsChange(true)
        if (setIsLoading) setIsLoading(false)
    }

    useEffect(() => {
        if (isChange) router.push("/change-password-success")
    }, [router, isChange])

    return (
        <form className="flex flex-col gap-3 pb-2" onSubmit={handleSubmit(onSubmit)}>
            {changePasswordInputs.map((input) => (
                <React.Fragment key={input.id}>
                    <Input
                        IconType={input.icon}
                        label={input.label}
                        name={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        colorInput="bg-inherit border-2 border-solid text-white pl-10"
                        id={input.id}
                        register={register}
                        errors={errors}
                    />
                </React.Fragment>
            ))}
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