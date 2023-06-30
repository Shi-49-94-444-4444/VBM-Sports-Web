import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";

interface InputProps {
    id?: string;
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    type?: string;
    disabled?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

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
    onChange
}) => {
    return (
        <div className="gap-1">
            {label && (
                <label htmlFor={id} className="block text-left text-sm font-semibold">
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
                            bg-[#EDC991]
                            w-full 
                            rounded-lg 
                            outline-none
                            hover:border-pink-cus-bt  
                            text-base
                            py-3    
                            px-6
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
