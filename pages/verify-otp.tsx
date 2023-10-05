import { FormatUI } from "@/app/components"
import { VerifyOTPForm } from "@/app/components/user/forgotPassword"

const VerifyOTP = () => {
    return (
        <FormatUI
            src="/images/background_3.png"
            title="Xác thực tài khoản"
            subTitle="Vui lòng nhập OTP đã gửi vào mail xác thực"
            body={<VerifyOTPForm />}
        />
    )
}

export default VerifyOTP