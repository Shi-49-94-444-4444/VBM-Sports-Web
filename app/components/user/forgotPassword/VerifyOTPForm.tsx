"use state"

import { useContext, useEffect, useState } from "react";
import { CountdownTimer, InputOTP } from "../../providers";
import { GlobalContext } from "@/contexts";
import { useForm } from "react-hook-form";
import { verifyOTPService } from "@/services/forgotPassword";
import { toast } from "react-toastify";
import { OTP } from "@/types";
import { useRouter } from "next/router";

const VerifyOTPForm = () => {
    const [isOTP, setIsOTP] = useState("")
    const { setIsLoading, setOTP, user, isAuthUser } = useContext(GlobalContext) || {}
    const { handleSubmit, setError, formState: { errors } } = useForm<OTP>();
    const router = useRouter()

    const handleOTPChange = (otpValue: string) => {
        setIsOTP(otpValue);
        // console.log(isOTP)
    };

    const onSubmit = async () => {
        try {
            if (setIsLoading) setIsLoading(true)

            const otp = localStorage.getItem("otp")

            console.log(isOTP);

            if (isOTP !== otp) {
                setError('digit', { type: 'manual', message: 'Mã OTP không đúng, vui lòng nhập lại' })
            }

            const res = await verifyOTPService({ email: user?.email!, otp: isOTP })

            console.log("Data", res)

            if (res.message === "Verify Success") {
                if (setOTP) setOTP(null)
                localStorage.removeItem("otp")

                toast.success(res.message, {
                    position: toast.POSITION.TOP_RIGHT,
                })

                router.push("/change_password")
            }

            if (setIsLoading) setIsLoading(false)
        } catch (error) {
            setError('root', { type: 'manual', message: 'Xác thực thất bại' });
            toast.error('Xác thực thất bại. Vui lòng thử lại sau.');
        }
    };

    useEffect(() => {
        if (isAuthUser) router.push("/");
    }, [isAuthUser, router]);

    return (
        <form className="flex flex-col gap-3 pb-2" onSubmit={handleSubmit(onSubmit)}>
            <InputOTP
                length={6}
                onOTPChange={handleOTPChange}
                errors={errors.digit}
            />
            <CountdownTimer initialMinutes={5} />
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
                Xác nhận
            </button>
        </form>
    )
}

export default VerifyOTPForm