"use client"

import { useContext, useEffect, useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { Input, Loading } from "../../providers";
import { GlobalContext } from "@/contexts";
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import { getOtp } from "@/types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { forgotPasswordService } from "@/services/forgotPassword";
import { sendOTP } from "@/utils/functions/sendOTP";
import { forgotPasswordSchema } from "@/utils";
import Cookies from "js-cookie";

const ForgotPasswordForm = () => {
    const [isForgot, setIsForgot] = useState(false)
    const {
        setIsLoading,
        isLoading,
    } = useContext(GlobalContext) || {}
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<getOtp>({
        resolver: yupResolver(forgotPasswordSchema),
    });

    const onSubmit = async (data: getOtp) => {
        if (setIsLoading) setIsLoading(true)

        const res = await forgotPasswordService(data)

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

        localStorage.setItem("email", JSON.stringify(data.email))
        // Cookies.set("token", res.data.token)

        // const result = await sendOTP(data.email, res.otp)

        // if (result.success) {
        setIsForgot(true)
        // }

        if (setIsLoading) setIsLoading(false)
    }

    useEffect(() => {
        if (isForgot) router.push("/verify-otp")
    }, [router, isForgot])

    return (
        <form className="flex flex-col gap-3 pb-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                name="email"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="email"
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

export default ForgotPasswordForm