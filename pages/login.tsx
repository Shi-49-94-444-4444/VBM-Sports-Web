import { FormatUI, Input, OtherAccess } from "@/app/components";
import Link from "next/link";

const login = () => {
    const bodyContent = (
        <>
            <Input
                label="Email"
                name="mail"
                placeholder="Nhập email"
                type="mail"
                colorInput="bg-inherit border-2 border-solid text-white"
            />
            <Input
                label="Mật khẩu"
                name="password"
                placeholder="Nhập password"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white"
            />
            <div className="
                    font-semibold 
                    cursor-pointer 
                    text-right
                    text-white
                "
            >
                <Link href="./forgot_password">
                    Quên mật khẩu ?
                </Link>
            </div>
        </>
    )

    const subTitleContent = (
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
                "
            >
                Chưa có tài khoản?
                <span className="underline cursor-pointer">
                    <Link href="./register">
                        {' '}Đăng ký ngay
                    </Link>
                </span>
            </div>
        </div>
    )

    return (
        <FormatUI
            src="/images/background_2.png"
            title="Đăng nhập"
            subTitle={subTitleContent}
            body={bodyContent}
            titleButton="Vào trang"
            footer={footerContent}
        />
    );
};

export default login;
