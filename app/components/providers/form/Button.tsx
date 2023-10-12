import { ButtonProps } from "@/types"

const Button: React.FC<ButtonProps> = ({
    title,
    style,
    onClick,
    icon,
    iconLeft,
    type,
}) => {
    return (
        <button className={`
                relative
                flex
                text-white 
                bg-primary-blue-cus 
                hover:text-primary-blue-cus
                hover:bg-white
                hover:border
                hover:border-primary-blue-cus
                border
                border-primary-blue-cus
                text-center
                items-center
                font-semibold
                py-2
                px-10
                rounded-lg
                whitespace-nowrap
                transition
                duration-500
                group
                ${style}    
            `}
            type={type || "button"}
            onClick={onClick}
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