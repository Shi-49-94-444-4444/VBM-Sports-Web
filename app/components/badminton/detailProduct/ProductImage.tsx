import { Product } from "@/types"
import Image from "next/image"

const ProductImage: React.FC<Product> = ({
    id,
    src
}) => {
    return (
        <div className="col-span-5" key={id}>
            <div className="
                    relative
                    h-full
                    transition-all
                    duration-300
                "
            >
                <div className="
                        absolute 
                        top-0 
                        left-0 
                        w-full 
                        h-full
                    "
                >
                    <Image
                        src={src!}
                        alt="QuickList"
                        layout="fill"
                        objectFit="cover"
                        className="
                            rounded-xl 
                        "
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductImage