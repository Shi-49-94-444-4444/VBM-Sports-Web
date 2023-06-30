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
            />
            <Input
                label="Mật khẩu"
                name="password"
                placeholder="Nhập password"
                type="password"
            />
            <div className="
                    font-semibold 
                    cursor-pointer 
                    text-right
                "
            >
                <Link href="./forgot_password">
                    quên mật khẩu ?
                </Link>
            </div>
        </>
    )

    const subTitleContent = (
        <OtherAccess />
    )

    const footerContent = (
        <div className="
                flex 
                justify-center 
                font-semibold 
                text-sm
            "
        >
            Đã chưa có tài khoản ? {' '}
            <span className="text-red-500 cursor-pointer">
                <Link href="./register">
                    Đăng ký
                </Link>
            </span>
        </div>
    )

    return (
        <FormatUI
            src="/images/quickbanner.png"
            title="Đăng nhập"
            subTitle={subTitleContent}
            body={bodyContent}
            titleButton="Vào trang"
            footer={footerContent}
        />
    );
};

export default login;
