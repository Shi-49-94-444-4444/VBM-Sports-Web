'use client'

import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { BiSolidLockAlt } from "react-icons/bi";
import { FormatUI, Input, OtherAccess } from "@/components";
import Layout from "@/app/(customer)/layout"

const Login = () => {
    const handleClick = () => {

    }

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
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
            <div className="
                    font-semibold 
                    cursor-pointer 
                    text-right
                    text-white
                "
            >
                <Link href="./forgot_password" className=" ">
                    Quên mật khẩu ?
                </Link>
            </div>
        </div>
    )

    const subBodyContent = (
        <div className="flex flex-row justify-between items-center">
            <div className="text-[#CCCCCC] whitespace-nowrap text-lg">
                Hoặc đăng nhập bằng
            </div>
            <OtherAccess />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4">
            <div className="
                    border-b-2
                    border-white 
                    border-opacity-20
                "
            >
            </div>
            <div className="
                    flex 
                    font-medium 
                    text-lg
                    text-white
                    space-x-1
                "
            >
                <span>Chưa có tài khoản?</span>
                <span className="underline cursor-pointer">
                    <Link href="./register" className=" ">
                        Đăng ký ngay
                    </Link>
                </span>
            </div>
        </div>
    )

    return (
        <Layout>
            <FormatUI
                src="/images/background_2.png"
                title="Đăng nhập"
                body={bodyContent}
                subBody={subBodyContent}
                titleButton="Vào trang"
                footer={footerContent}
                onClick={handleClick}
            />
        </Layout>
    );
};

export default Login;
