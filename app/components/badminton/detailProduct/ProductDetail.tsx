import { Product } from "@/types";
import { Share } from "../../providers";

const ProductDetail: React.FC<Product> = ({
    id,
    title,
    description,
    price,
    timeOpen,
    timeClose,
    slot
}) => {
    return (
        <div className="relative py-10" key={id}>
            <div className="flex flex-col gap-10">
                <div className="
                        flex 
                        flex-col 
                        font-semibold 
                        gap-1
                    ">
                    <h2 className="text-3xl">
                        Tony Mack
                    </h2>
                    <p className="text-red-500 text-2xl">
                        {price}$
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-gray-600">
                        Mô tả:
                    </h3>
                    <p className="text-lg text-gray-500">
                        {description}
                    </p>
                </div>
                <div className="
                        flex 
                        flex-col 
                        gap-5 
                        text-gray-600
                    "
                >
                    <div className="text-xl font-semibold space-x-1">
                        <span className="
                                border-b-2 
                                border-solid 
                                border-red-500 
                                inline-block
                            "
                        >
                            Location:
                        </span>
                        <span>
                            {title}
                        </span>
                    </div>
                    <div className="text-xl font-semibold space-x-1">
                        <span>
                            Time:
                        </span>
                        <span>
                            {timeOpen} - {timeClose}
                        </span>
                    </div>
                    <div className="text-xl font-semibold space-x-1">
                        <span>
                            Address:
                        </span>
                        <span>
                            {title}
                        </span>
                    </div>
                    <div className="text-xl font-semibold space-x-1">
                        <span>
                            Available slot:
                        </span>
                        <span>
                            {slot}
                        </span>
                    </div>
                </div>
                <Share />
            </div>
        </div>
    )
}

export default ProductDetail