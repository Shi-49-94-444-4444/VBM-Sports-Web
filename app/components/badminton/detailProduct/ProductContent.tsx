"use client"

import { Product } from "@/types";
import ProductDetail from "./ProductDetail"
import { ImageCarousel } from "../../providers";

const ProductContent: React.FC<Product> = ({
    id,
    imgUrl,
    days,
    startTime,
    endTime
}) => {
    return (
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-5 py-5">
            <div className="lg:col-span-5 md:h-96 sm:h-80 h-72 lg:h-full transition-all duration-500">
                <ImageCarousel
                    key={id}
                    id={id}
                    imgUrl={imgUrl}
                />
            </div>
            <div className="lg:col-span-2">
                <ProductDetail
                    key={id}
                    id={id}
                    days={days}
                    startTime={startTime}
                    endTime={endTime}
                />
            </div>
        </div>
    )
}

export default ProductContent