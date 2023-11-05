import { InputProps } from "@/types";

const Input: React.FC<InputProps> = ({
    id = "",
    icon,
    IconType,
    label,
    name,
    placeholder,
    value,
    type,
    register,
    disabled,
    errors,
    onChange,
    colorInput,
    pattern,
    flagInput,
    rowArea,
    maxLength,
    isMoney
}) => {
    return (
        <div className="gap-1 transition duration-300">
            {label && (
                <label htmlFor={id} className="block text-left text-base font-semibold text-white mb-1">
                    {label}
                </label>
            )}
            <div className="relative flex items-center  ">
                {icon && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white-cus">
                        {icon}
                    </span>
                )}
                {IconType && (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white-cus">
                        <IconType size={25} />
                    </span>
                )}
                {flagInput ? (
                    <textarea
                        id={id}
                        typeof={type}
                        rows={rowArea || 5}
                        maxLength={maxLength || 100}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        {...(register && register(name))}
                        disabled={disabled}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                            }
                        }}
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
                            transition
                            duration-300
                            ${errors && errors[id] ? "border border-red-500" : ""}
                        `}
                        pattern={pattern?.source}
                    />
                ) : (
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        placeholder={placeholder}
                        {...(register && register(name))}
                        disabled={disabled}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                event.preventDefault();
                            }
                        }}
                        onChange={onChange}
                        maxLength={maxLength || 50}
                        className={`
                            ${colorInput}
                            w-full 
                            rounded-lg 
                            outline-none
                            focus:ring-0
                            text-base
                            py-3    
                            px-6
                            transition
                            duration-300
                            ${errors && errors[id] ? "border border-red-500" : ""}
                            ${disabled && disabled ? "cursor-not-allowed" : ""}
                        `}
                        pattern={pattern?.source}
                    />
                )}
                {isMoney && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600">
                        VND
                    </span>
                )}
            </div>
            {errors && (
                <p className="text-red-500 font-medium h-4">
                    {errors[id]?.message?.toString()}
                </p>
            )}
        </div>
    );
};

export default Input;
