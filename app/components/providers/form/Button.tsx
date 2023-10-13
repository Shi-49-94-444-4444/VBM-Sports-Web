import { ButtonProps } from "@/types"

const Button: React.FC<ButtonProps> = ({
    title,
    style,
    onClick,
    icon,
    iconLeft,
    type,
    disabled = false,
    isHover = true
}) => {
    return (
        <button className={`
                relative
                flex
                text-white 
                bg-primary-blue-cus 
                ${isHover ? "hover:text-primary-blue-cus hover:border-primary-blue-cus hover:bg-white hover:border" : ""}
                ${disabled ? "cursor-not-allowed" : ""}
                border
                border-primary-blue-cus
                text-center
                items-center
                font-semibold
                py-2
                px-10
                rounded-lg
                transition
                duration-500
                group
                ${style}    
            `}
            type={type || "button"}
            onClick={onClick}
            disabled={disabled}
        >
            {iconLeft && (
                <span className="mr-3 text-white group-hover:text-primary-blue-cus">
                    {iconLeft}
                </span>
            )}
            {title}
            {icon && (
                <span className="ml-3 text-white group-hover:text-primary-blue-cus">
                    {icon}
                </span>
            )}
        </button>
    )
}

export default Button