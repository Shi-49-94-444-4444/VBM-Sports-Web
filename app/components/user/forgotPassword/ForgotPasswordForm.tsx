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
import { getListUserService } from "@/services";

const initialFormData = {
    email: "",
};

const ForgotPasswordForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const {
        setIsLoading,
        isAuthUser,
        setIsRouterForgotPassword,
    } = useContext(GlobalContext) || {}
    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
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
        if (setIsLoading) setIsLoading(true)

        const listUser = await getListUserService()

        if (listUser.email !== data.email) {
            setError("email", { message: "Tài khoản không tồn tại" })
            if (setIsLoading) setIsLoading(false)
            return
        }

        const res = await forgotPasswordService(data)

        console.log("forgot: ", res)

        if (res.token) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            localStorage.setItem("email", JSON.stringify(formData.email))
            localStorage.setItem("otp", JSON.stringify(res.token))

            const result = await sendOTP(formData.email, res.token)

            if (result.success) {
                if (setIsRouterForgotPassword) setIsRouterForgotPassword(true)
                router.push("/verify-otp")
            }

        } else if (res.ErrorCode) {
            setError("email", { message: res.ErrorCode })
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }

        if (setIsLoading) setIsLoading(false)
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