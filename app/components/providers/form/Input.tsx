import { InputProps } from "@/types";
import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";

const Input: React.FC<InputProps> = ({
    id = "",
    icon,
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
                <label htmlFor={id} className="block text-left text-base font-semibold text-white mb-3">
                    {label}
                </label>
            )}
            <div className="relative flex items-center  ">
                {icon && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white-cus">
                        {icon}
                    </span>
                )}
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
                            focus:ring-0
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
