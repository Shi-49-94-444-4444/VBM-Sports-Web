import { InputProps } from "@/types";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";

const Input: React.FC<InputProps> = ({
    id = "",
    label,
    name,
    placeholder,
    value,
    type,
    register,
    disabled,
    errors,
    onChange,
    colorInput
}) => {
    return (
        <div className="gap-1 transition-all duration-300">
            {label && (
                <label htmlFor={id} className="block text-left text-base font-medium text-white mb-3">
                    {label}
                </label>
            )}
            <div className="relative flex items-center">
                <input
                    id={id}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    {...(register && register(id))}
                    disabled={disabled}
                    onChange={onChange}
                    className={`
                            ${colorInput}
                            w-full 
                            rounded-lg 
                            outline-none
                            hover:border-pink-cus-bt  
                            text-base
                            py-3    
                            px-6
                            transition-all
                            duration-300
                        `
                    }
                />
            </div>
            {errors && (
                <p className="text-red-600 font-semibold h-2">
                    {errors[id]?.message?.toString()}
                </p>
            )}
        </div>
    );
};

export default Input;
