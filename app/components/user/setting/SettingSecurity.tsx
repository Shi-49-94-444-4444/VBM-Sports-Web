const SettingSecurity = () => {
    return (
        <div className="relative p-8 flex flex-col gap-5">
            <div className="text-gray-600 text-3xl font-semibold">Bảo mật</div>
            <div className="border border-black border-opacity-10" />
            <div className="flex flex-row justify-between items-center text-xl">
                <div className="font-semibold text-gray-600">
                    Thay đổi mật khẩu
                </div>
                <div className="text-gray-500">
                    Ntphuc***
                </div>
                <div className="text-primary-blue-cus cursor-pointer">
                    Chỉnh sửa
                </div>
            </div>
            <div className="flex flex-row justify-between items-center text-xl">
                <div className="font-semibold text-gray-600">
                    Thay đổi email
                </div>
                <div className="text-gray-500">
                    Phuchanh***@gmail.com
                </div>
                <div className="text-primary-blue-cus cursor-pointer">
                    Chỉnh sửa
                </div>
            </div>
        </div>
    )
}

export default SettingSecurity