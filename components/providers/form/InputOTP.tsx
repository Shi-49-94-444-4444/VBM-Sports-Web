'use client'

import { useState, useRef, useEffect } from "react"

interface InputOTPProps {
    length: number; 
    onOTPChange: (otp: string) => void;
}

const InputOTP: React.FC<InputOTPProps> = ({ length, onOTPChange }) => {
    const [otp, setOTP] = useState<string[]>(new Array(length).fill(""))
    const inputRefs = useRef<(HTMLInputElement | null)[]>([])

    useEffect(() => {
        // Tạo mảng ký tự từ mảng các ô nhập
        const otpString = otp.join("")
        onOTPChange(otpString)
    }, [otp, onOTPChange]);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = e.target.value;
        if (value.length > 1) {
            // Đảm bảo mỗi ô nhập chỉ có 1 ký tự
            return;
        }
        const newOTP = [...otp]
        newOTP[index] = value
        setOTP(newOTP)

        if (value !== "" && index < length - 1) {
            // Tự động chuyển sang ô nhập tiếp theo khi điền đủ 1 ký tự
            inputRefs.current[index + 1]?.focus()
        }
    };

    const handleInputKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        const value = e.key;
        if (!/^[0-9]$/.test(value)) {
            // Chỉ cho phép nhập ký tự số hoặc chữ cái
            e.preventDefault()
            return;
        }

        const newOTP = [...otp]
        newOTP[index] = value
        setOTP(newOTP)

        if (index < length - 1) {
            // Tự động chuyển sang ô nhập tiếp theo khi điền đủ 1 ký tự
            inputRefs.current[index + 1]?.focus()
        }
    };

    return (
        <div className="flex w-full justify-between">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    type="text"
                    value={digit}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleInputKeyDown(e, index)}
                    maxLength={1}
                    className="w-14 h-14 px-2 py-2 text-center border rounded-md bg-inherit text-gray-300 border-gray-300 text-xl font-semibold focus:ring-0  "
                    ref={(el) => (inputRefs.current[index] = el)}
                />
            ))}
        </div>
    );
};

export default InputOTP;
