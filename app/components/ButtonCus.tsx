import { ButtonCusProps } from "@/types"

const ButtonCus: React.FC<ButtonCusProps> = ({
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
                hover:text-white
                hover:bg-navbar-cus
                text-center
                items-center
                font-semibold
                py-2
                px-10
                rounded-lg
                whitespace-nowrap
                transition-all
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

export default ButtonCus