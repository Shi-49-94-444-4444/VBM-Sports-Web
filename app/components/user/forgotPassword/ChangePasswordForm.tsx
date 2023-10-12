"use client"

import { BiSolidLockAlt } from "react-icons/bi"
import { Input, Loading } from "../../providers"
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts";
import { useRouter } from "next/router";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ChangePasswordFormData, FormData } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePasswordService } from "@/services/forgotPassword";
import { changePasswordSchema, handleChange } from "@/utils";

const ChangePasswordForm = () => {
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });
    const {
        setIsAuthUser,
        isAuthUser,
        setUser,
        setIsLoading,
        isLoading
    } = useContext(GlobalContext) || {}
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setError,
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
            router.push("/change-password-success")
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }

        if (setIsLoading) setIsLoading(false)
    }

    useEffect(() => {
        if (isAuthUser) router.push("/");
    }, [isAuthUser, router]);

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
                value={formData.password}
                onChange={(e) => handleChange(e, setFormData)}
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
                value={formData.confirmPassword}
                onChange={(e) => handleChange(e, setFormData)}
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