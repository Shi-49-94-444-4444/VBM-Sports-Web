'use client'

interface BackgroundProps {
    src: string;
    children: React.ReactNode
}

const Background: React.FC<BackgroundProps> = ({
    src,
    children
}) => {
    return (
        <div className="
              absolute 
              inset-0 
              bg-cover 
              bg-center 
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