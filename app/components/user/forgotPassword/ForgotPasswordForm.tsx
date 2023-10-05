"use client"

import { useContext, useEffect, useState } from "react";
import { AiFillMail } from "react-icons/ai";
import { Input } from "../../providers";
import { GlobalContext } from "@/contexts";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { toast } from "react-toastify";
import { getOtp } from "@/types";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { forgotPasswordService } from "@/services/forgotPassword";
import { sendOTP } from "@/utils/sendOTP";

const initialFormData = {
    email: "",
};

const ForgotPasswordForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const {
        setIsLoading,
        isAuthUser,
        setIsRouterForgotPassword
    } = useContext(GlobalContext) || {}
    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().email('Email không hợp lệ').required('Email là trường bắt buộc'),
    });

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<getOtp>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: getOtp) => {
        try {
            if (setIsLoading) setIsLoading(true)

            const res = await forgotPasswordService(data)

            console.log("forgot: ", res)

            if (res.token) {
                toast.success(res.message, {
                    position: toast.POSITION.TOP_RIGHT,
                })
            }

            localStorage.setItem("email", formData.email)
            localStorage.setItem("otp", res.token)

            const result = await sendOTP(formData.email, res.token)

            if (result.success) {
                if (setIsRouterForgotPassword) setIsRouterForgotPassword(true)
                router.push("/verify-otp")
            }

            if (setIsLoading) setIsLoading(false)
        } catch (error) {
            setError('root', { type: 'manual', message: 'Gửi thất bại' });
            toast.error('Gửi thất bại. Vui lòng thử lại sau.');
        }
    };

    useEffect(() => {
        if (isAuthUser) router.push("/");
    }, [isAuthUser, router]);

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
                value={formData.email}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }
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
                Vào trang
            </button>
        </form>
    )
}

export default ForgotPasswordForm