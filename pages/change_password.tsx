import { ChangePasswordForm, FormatUI } from "@/app/components"

const ChangePassword = () => {

    return (
        <FormatUI 
            src="/images/background_3.png"
            title="Đổi Mật Khẩu"
            body={<ChangePasswordForm />}
        />
    )
}

export default ChangePassword