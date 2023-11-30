import { HiDownload } from "react-icons/hi"

const DownMetalBtn = () => {
    return (
        <div className="flex flex-shrink-0 space-x-1 items-center text-primary-blue-cus font-medium text-xl">
            <HiDownload size={30} />
            <span>
                Tải dữ liệu xuống
            </span>
        </div>
    )
}

export default DownMetalBtn