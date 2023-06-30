
import { FormatUI, Input, OtherAccess } from "@/app/components";
import Link from "next/link";

const register = () => {
    const bodyContent = (
        <>
            <div className="flex flex-row gap-3">
                <Input
                    label="Tên"
                    placeholder="Nhập tên"
                />
                <Input
                    label="Họ"
                    placeholder="Nhập họ và tên đệm"
                />
            </div>
            <Input
                label="Email *"
                placeholder="Nhập email"
                type="mail"
            />
            <Input
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                type="mail"
            />
            <Input
                label="Xác nhận mật khẩu"
                placeholder="Nhập lại mật khẩu"
                type="mail"
            />
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
            Đã có tài khoản ? {' '}
            <span className="text-red-500 cursor-pointer">
                <Link href="./login">
                    Đăng nhập
                </Link>
            </span>
        </div>
    )

    return (
        <FormatUI
            src="/images/quickbanner.png"
            title="Đăng kí"
            subTitle={subTitleContent}
            body={bodyContent}
            titleButton="Vào trang"
            footer={footerContent}
        />
    );
};

export default register;
