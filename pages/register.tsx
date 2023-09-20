
import { FormatUI, Input } from "@/app/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillMail } from "react-icons/ai";
import { BiSolidLockAlt, BiSolidUser } from "react-icons/bi";

const Register = () => {
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push("/register_stepper")
        event.preventDefault()
    };

    const bodyContent = (
        <div className="flex flex-col gap-5">
            <Input
                icon={<BiSolidUser size={25} />}
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                type="text"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Xác nhận mật khẩu"
                placeholder="Nhập lại mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
        </div>
    )

    const footerContent = (
        <div className="
                flex 
                font-medium 
                text-lg
                text-white
                space-x-1
            "
        >
            <span>Đã có tài khoản?</span>
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
            title="Đăng ký"
            body={bodyContent}
            titleButton="Vào trang"
            footer={footerContent}
            onClick={handleClick}
        />
    );
};

export default Register;
