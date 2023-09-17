import { ContainerProps } from "@/types"

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div
            className="
                max-w-[2520px]
                lg:px-24
                md:px-10
                py-5
                px-4
                transition
                duration-300
            "
        >
            {children}
        </div>
    )
}

export default Container