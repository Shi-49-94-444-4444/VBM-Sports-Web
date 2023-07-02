'use client'

import BackgroundProps from "@/types/backgroundCus"

const Background: React.FC<BackgroundProps> = ({
    src,
    children
}) => {
    return (
        <div className="
                relative
                md:inset-0
                lg:inset-auto
                xl:inset-auto
                bg-center 
                bg-cover
                bg-no-repeat
                w-full 
                h-screen
            "
            style={{
                backgroundImage: `url(${src})`,
            }}>
            {children}
        </div>
    )
}

export default Background