import { ButtonCusProps } from "@/types"

const ButtonCus: React.FC<ButtonCusProps> = ({
    title,
    style,
    onClick
}) => {
    return (
        <button className={`
                text-white 
                bg-navbar-cus 
                hover:text-white
                hover:bg-navbar-cus
                text-center
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
        </button>
    )
}

export default ButtonCus