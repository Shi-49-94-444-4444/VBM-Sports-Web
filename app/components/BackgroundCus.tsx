'use client'

import BackgroundProps from "@/types/backgroundCus"

const Background: React.FC<BackgroundProps> = ({
    src,
    children
}) => {
    return (
        <div className="
                relative
                inset-0
                lg:inset-auto
                bg-center 
                bg-cover
                bg-no-repeat
                w-auto 
                h-auto
                transition-all
                duration-300
            "
            style={{
                backgroundImage: `url(${src})`,
            }}>
            {children}
        </div>
    )
}

export default Background