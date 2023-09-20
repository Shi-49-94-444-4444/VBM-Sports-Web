import { FormatUI, Input } from "@/app/components"
import { useRouter } from "next/router"
import { BiSolidLockAlt } from "react-icons/bi"

const ChangePassword = () => {
    const router = useRouter()

    const bodyContent = (
        <div className="flex flex-col gap-5">
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Xác nhận mật khẩu"
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
            />
        </div>
    )

    return (
        <FormatUI 
            src="/images/background_3.png"
            title="Đổi Mật Khẩu"
            body={bodyContent}
            titleButton="Cập nhập"
            onClick={() => {router.push('/change_password_success')}}
        />
    )
}

export default ChangePassword