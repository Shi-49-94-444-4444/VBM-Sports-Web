import { listVoucher } from "@/utils"
import Select from "react-select"

const PaymentVoucher = () => {
    return (
        <div className="relative bg-[#F5F5F5] rounded-lg my-10">
            <div className="flex flex-col px-6 py-8 gap-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    Voucher
                </div>
                <div className="border-2 border-gray-300" />
                <div className="flex flex-row justify-between">
                    <Select
                        options={listVoucher}
                        className="w-2/5 text-xl h-14 inline-grid"
                        isClearable
                        isSearchable
                        placeholder="Combo box"
                    />
                    <div className="text-gray-600 text-xl">
                        -20.000đ
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentVoucher