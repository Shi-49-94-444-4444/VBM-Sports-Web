
import { FormatUI, Input } from "@/app/components";
import Link from "next/link";

const register = () => {
    const bodyContent = (
        <>
            <Input
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                type="text"
                colorInput="bg-inherit border-2 border-solid text-white"
            />
            <Input
                label="Email"
                placeholder="Nhập email"
                type="mail"
                colorInput="bg-inherit border-2 border-solid text-white"
            />
            <Input
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white"
            />
            <Input
                label="Xác nhận mật khẩu"
                placeholder="Nhập lại mật khẩu"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white"
            />
        </>
    )

    const footerContent = (
        <div className="
                flex 
                font-medium 
                text-lg
                text-white
            "
        >
            Đã có tài khoản? {'   '}
            <span className="underline cursor-pointer">
                <Link href="./login">
                    Đăng nhập ngay
                </Link>
            </span>
        </div>
    )

    return (
        <FormatUI
            src="/images/background_4.png"
            title="Đăng kí"
            body={bodyContent}
            titleButton="Vào trang"
            footer={footerContent}
        />
    );
};

export default register;
