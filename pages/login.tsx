"use client"

import { FormatUI, LoginForm, OtherAccess } from "@/app/components";
import Link from "next/link";
import { useGlobalState } from "@/contexts";
import { login } from "@/fetch/axiosClient";
import { useRouter } from "next/router";

const Login = () => {
    const router = useRouter();
    const { setUser } = useGlobalState();

    const handleLogin = async (data: any) => {
        try {
            const response = await login(data.email, data.password);
            setUser(response.user);
            // router.push('/');
        } catch (error) {
            console.error('Login failed:', error);
            // Xử lý lỗi đăng nhập ở đây, có thể sử dụng react-toastify
        }
    };

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
        <FormatUI
            src="/images/background_2.png"
            title="Đăng nhập"
            body={<LoginForm/>}
            subBody={subBodyContent}
            titleButton="Vào trang"
            footer={footerContent}
            typeButton="submit"
            onSubmit={handleLogin}
        />
    );
};

export default Login;
