import { listMethodsPayment } from "@/utils"
import FormatMethod from "./FormatMethod"
import { useState } from "react";

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState<number | null>(null);

    const handleMethodChange = (methodId: number) => {
        setSelectedMethod(methodId);
    };

    return (
        <div className="relative bg-[#F5F5F5] rounded-lg my-10">
            <div className="flex flex-col px-6 py-8 gap-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    Phương Thức Thanh Toán
                </div>
                <div className="border-2 border-gray-300" />
                {listMethodsPayment.map((item) => (
                    <FormatMethod 
                        key={item.id}
                        id={item.id}
                        src={item.src}
                        title={item.title}
                        number={item.number}
                        isChecked={item.id === selectedMethod}
                        onChange={handleMethodChange} 
                    />
                ))}
            </div>
        </div>
    )
}

export default PaymentMethod