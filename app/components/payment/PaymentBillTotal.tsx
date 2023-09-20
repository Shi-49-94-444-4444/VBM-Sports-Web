const PaymentBillTotal = () => {
    return (
        <div className="relative bg-[#F5F5F5] rounded-lg my-10 transition-all duration-500">
            <div className="flex flex-col px-6 py-8 gap-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    Tổng Thanh Toán
                </div>
                <div className="border-2 border-gray-300" />
                <div className="flex flex-row ml-auto md:space-x-32 space-x-20 text-gray-600 text-xl transition-all duration-500">
                    <span className="font-normal ">
                        Tiền đặt sân:
                    </span>
                    <span className="font-semibold">
                        59.000đ
                    </span>
                </div>
                <div className="flex flex-row ml-auto md:space-x-32 space-x-20 text-gray-600 text-xl transition-all duration-500">
                    <span className="text-right font-normal ">
                        Giảm giá:
                    </span>
                    <span className="font-semibold">
                        59.000đ
                    </span>
                </div>
                <div className="border-b-2 border-gray-300" />
                <div className="flex flex-row ml-auto md:space-x-32 space-x-20 text-gray-600 text-xl transition-all duration-500">
                    <span className="font-normal ">
                        Số tiền cần thanh toán:
                    </span>
                    <span className="font-semibold">
                        59.000đ
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PaymentBillTotal