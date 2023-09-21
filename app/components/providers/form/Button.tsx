import { ButtonProps } from "@/types"

const Button: React.FC<ButtonProps> = ({
    title,
    style,
    onClick,
    icon
}) => {
    return (
        <button className={`
                relative
                flex
                text-white 
                bg-navbar-cus 
                hover:text-navbar-cus
                hover:bg-white
                hover:border
                hover:border-navbar-cus
                border
                border-navbar-cus
                text-center
                items-center
                font-semibold
                py-2
                px-10
                rounded-lg
                whitespace-nowrap
                transition
                duration-500
                ${style}    
            `}
            type="button"
            onClick={onClick}
        >
            {title}
            {icon && (
                <span className="ml-3">
                    {icon}
                </span>
            )}
        </button>
    )
}

export default Button