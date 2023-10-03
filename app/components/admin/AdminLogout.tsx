import { ImExit } from "react-icons/im"

const AdminLogout = () => {
    return (
        <div className="border border-black border-opacity-10 rounded-t-xl rounded-l-none bg-white text-gray-600 hover:text-primary-blue-cus mt-auto">
            <div className="flex flex-row space-x-2 p-6 items-center cursor-pointer">
                <div className="flex-shrink-0">
                    <ImExit size={24} />
                </div>
                <p className="text-lg font-medium">
                    Đăng Xuất
                </p>
            </div>
        </div>
    )
}

export default AdminLogout