import { BackgroundProps } from "@/types"

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
                transition
                duration-500
                overflow-x-hidden
            "
            style={{
                backgroundImage: `url(${src})`,
            }}>
            {children}
        </div>
    )
}

export default Background