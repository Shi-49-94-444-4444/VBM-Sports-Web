'use client'

import { FormatUI, Input } from "@/components";
import { useRouter } from "next/navigation";
import { AiFillMail } from "react-icons/ai";
import Layout from "@/app/(customer)/layout"

const ForgotPassword = () => {

    const router = useRouter()

    const bodyContent = (
        <div className="flex flex-col gap-5">
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                name="mail"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
        </div>
    )

    return (
        <Layout>
            <FormatUI
                src="/images/background_3.png"
                title="Quên Mật Khẩu"
                subTitle="Nhập email đăng ký của bạn"
                body={bodyContent}
                titleButton="Đặt ngay"
                onClick={() => { router.push('/verify_otp') }}
            />
        </Layout>
    );
};

export default ForgotPassword;
