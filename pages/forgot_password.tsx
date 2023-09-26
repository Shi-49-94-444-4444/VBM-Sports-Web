"use client"

import { FormatUI, Input } from "@/app/components";
import { useRouter } from "next/router";
import { AiFillMail } from "react-icons/ai";

const ForgotPassword = () => {

    const router = useRouter()

    const bodyContent = (
        <div className="flex flex-col gap-5">
            <Input
                icon = {<AiFillMail size={25}/>}
                label="Email"
                name="mail"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
        </div>
    )

    return (
        <FormatUI
            src="/images/background_3.png"
            title="Quên Mật Khẩu"
            subTitle="Nhập email đăng ký của bạn"
            body={bodyContent}
            titleButton="Đặt ngay"
            onClick={() => {router.push('/verify_otp')}}
        />
    );
};

export default ForgotPassword;
