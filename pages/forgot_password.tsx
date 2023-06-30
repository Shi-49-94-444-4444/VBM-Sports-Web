
import { FormatUI, Input } from "@/app/components";
import Link from "next/link";

const login = () => {
    const bodyContent = (
        <>
            <Input
                label="Email"
                name="mail"
                placeholder="Nhập địa chỉ email"
                type="mail"
            />
            <div className="font-semibold text-right">
                Đã nhớ mật khẩu? {' '}
                <span className="text-red-500 cursor-pointer">
                    <Link href="./login">
                        đăng nhập ngay
                    </Link>
                </span>
            </div>
        </>
    )

    const subTitleContent = (
        <div className="
                font-medium 
                text-base 
                text-center
            "
        >
            Bạn muốn đổi mật khẩu?
        </div>
    )

    const footerContent = (
        <></>
    )

    return (
        <FormatUI
            src="/images/quickbanner.png"
            title="Đổi mật khẩu"
            subTitle={subTitleContent}
            body={bodyContent}
            titleButton="Đặt ngay"
            footer={footerContent}
        />
    );
};

export default login;
