'use client'

import ContainerProps from "@/types/container"

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="
                max-w-[2520px]
                lg:px-24
                lg:pt-10
                md:px-10
                md:pt-5
                px-4
                transition-all
                duration-300
            "
        >
            {children}
        </div>
    )
}

export default Container