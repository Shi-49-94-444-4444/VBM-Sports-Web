import Image from "next/image"

interface FormatPaymentProps {
    src: string;
    alt: string;
    title: string;
    description: string;
}

const FormatPayment: React.FC<FormatPaymentProps> = ({
    src,
    alt,
    title,
    description
}) => {
    return (
        <div className="relative py-10">
            <div className="
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    gap-5
                    xl:px-40
                    lg:px-20
                    md:px-10 
                "
            >
                <div className="relative">
                    <Image
                        src={src}
                        alt={alt}
                        width={200}
                        height={200}
                        className="object-cover"
                    />
                </div>
                <div className="text-4xl font-semibold text-center">
                    {title}
                </div>
                <div className="text-gray-500 text-xl font-normal text-center">
                    {description}
                </div>
            </div>
        </div>
    )
}

export default FormatPayment