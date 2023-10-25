import { Container, MPContent, MPUserSlot } from "@/app/components"
import Layout from "@/app/layout"

const ManagementBadmintonPage = () => {
    return (
        <Layout>
            <Container>
                <div className="relative">
                    <div className="flex justify-center py-10">
                        <h1 className="text-gray-600 font-semibold text-3xl">
                            Quản lý bài đăng
                        </h1>
                    </div>
                    <div className="relative w-full flex flex-col gap-3">
                        <MPContent />
                        <MPUserSlot />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default ManagementBadmintonPage