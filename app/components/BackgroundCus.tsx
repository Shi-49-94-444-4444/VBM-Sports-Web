'use client'

import BackgroundProps from "@/types/backgroundCus"

const Background: React.FC<BackgroundProps> = ({
    src,
    children
}) => {
    return (
        <div className="
                absolute 
                inset-0 
                bg-center 
                bg-cover
                bg-no-repeat
                w-full 
                h-full
            "
            style={{
                backgroundImage: `url(${src})`,
            }}>
            {children}
        </div>
    )
}

export default Background