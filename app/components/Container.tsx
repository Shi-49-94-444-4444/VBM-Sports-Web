'use client'

import ContainerProps from "@/types/container"

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="
                max-w-[2520px]
                xl:px-24
                xl:pt-10
                md:px-10
                md:pt-5
                sm:px-2
                px-4
            "
        >
            {children}
        </div>
    )
}

export default Container