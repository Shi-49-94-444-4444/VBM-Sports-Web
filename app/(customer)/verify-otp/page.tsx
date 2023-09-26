'use client'

import { CountdownTimer, FormatUI, InputOTP } from "@/components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Layout from "@/app/(customer)/layout"

const VerifyOTP = () => {
    const [otp, setOTP] = useState("")
    const router = useRouter()

    const handleOTPChange = (otpValue: string) => {
        setOTP(otpValue);
    };

    const handleVerifyOTP = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("OTP entered:", otp)
        router.push('/change_password')
        event.preventDefault()
    };

    const bodyContent = (
        <div className="flex flex-col gap-3">
            <InputOTP
                length={6}
                onOTPChange={handleOTPChange}
            />
            <CountdownTimer initialMinutes={5} />
        </div>
    )

    return (
        <Layout>
            <FormatUI
                src="/images/background_3.png"
                title="Xác thực tài khoản"
                subTitle="Vui lòng nhập OTP đã gửi vào mail xác thực"
                titleButton="Xác Nhận"
                body={bodyContent}
                onClick={handleVerifyOTP}
            />
        </Layout>
    )
}

export default VerifyOTP