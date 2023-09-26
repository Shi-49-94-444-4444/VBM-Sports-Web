"use client"

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