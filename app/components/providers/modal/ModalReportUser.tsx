"use client"

import { useReportUserModal } from "@/hooks"
import CustomModal from "./Modal"
import { Button } from "../form"
import { useContext, useState } from "react"
import { GlobalContext } from "@/contexts"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { postReportUserService } from "@/services"
import { Loading } from "../loader"

const ModalReportUser = ({ id }: { id: string }) => {
    const reportUserModal = useReportUserModal()
    const [selectedReport, setSelectedReport] = useState("")
    const { user, setIsLoadingModal, isLoadingModal } = useContext(GlobalContext) || {}
    const { handleSubmit } = useForm()

    const listReport = [
        { label: "Lừa đảo" },
        { label: "Trùng bài viết" },
        { label: "Không thể liên hệ với người đăng" },
        { label: "Thông tin bài đăng không chính xác" },
        { label: "Lý do khác" },
    ]

    const onSubmit = async () => {
        if (setIsLoadingModal) setIsLoadingModal(true)

        if (!selectedReport) {
            toast.error("Chọn tố cáo trước khi tố cáo", {
                position: toast.POSITION.TOP_RIGHT
            })
            if (setIsLoadingModal) setIsLoadingModal(false)
            return
        }

        if (user && user.id) {
            const res = await postReportUserService({
                fromUserID: user.id,
                content: selectedReport,
                toUserID: id
            })

            //console.log(res)
            
            if (res.data == null) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoadingModal) setIsLoadingModal(false)
                return
            }

            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })

            reportUserModal.onClose()
        }

        if (setIsLoadingModal) setIsLoadingModal(false)
    }

    return (
        <CustomModal
            isOpen={reportUserModal.isOpen}
            onClose={reportUserModal.onClose}
            title="Báo cáo bài đăng"
            width="md:w-auto w-full"
            height="h-auto"
        >
            <form className="flex flex-col gap-3 justify-center p-2" onSubmit={handleSubmit(onSubmit)}>
                {listReport.map((report, index) => (
                    <div key={index} className="text-lg text-gray-600 font-medium space-x-2">
                        <input
                            type="radio"
                            id={`report-${index}`}
                            name="report"
                            value={report.label}
                            checked={selectedReport === report.label}
                            onChange={() => setSelectedReport(report.label)}
                            className="hidden"
                        />
                        <label htmlFor={`report-${index}`} className="flex items-center cursor-pointer">
                            <span className={`w-5 h-5 inline-block mr-2 rounded-full border border-gray-300 relative bg-white`}>
                                {selectedReport === report.label && <span className="absolute inset-0 m-auto h-3 w-3 bg-primary-blue-cus rounded-full"></span>}
                            </span>
                            {report.label}
                        </label>
                    </div>
                ))}
                <div className="relative flex justify-center pt-2">
                    {isLoadingModal ? (
                        <Button
                            title={<Loading loading={isLoadingModal} color="white" />}
                            style=""
                            type="submit"
                            isHover={false}
                        />
                    ) : (
                        <Button
                            title="Xác nhận"
                            style=""
                            type="submit"
                            disabled={user ? user.id?.toString() === id.toString() : false}
                        />
                    )}
                </div>
            </form>
        </CustomModal>
    )
}

export default ModalReportUser