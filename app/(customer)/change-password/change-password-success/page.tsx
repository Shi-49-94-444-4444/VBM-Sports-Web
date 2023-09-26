import { FormatUI } from "@/components"
import Layout from "@/app/(customer)/layout"

const ChangePasswordSuccess = () => {

    const bodyContent = (
        <div className="flex flex-col gap-5 justify-center items-center pb-5">
            <div className="relative w-32 h-32 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-8xl font-semibold text-gray-600">&#10003;</span>
            </div>
            <section className="gap-3 text-center">
                <h1 className="text-3xl font-semibold text-white">
                    Đổi mật khẩu thành công
                </h1>
                <p className="text-gray-400 text-xl font-medium">
                    Bạn đã đổi mật khẩu thành công
                </p>
            </section>
        </div>
    )

    return (
        <Layout>
            <FormatUI
                src="/images/background_3.png"
                body={bodyContent}
            />
        </Layout>
    )
}

export default ChangePasswordSuccess