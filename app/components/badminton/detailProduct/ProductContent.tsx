"use client"

import { ProductDetailContent } from "@/types";
import ProductDetail from "./ProductDetail"
import { ImageCarousel } from "../../providers";

const ProductContent: React.FC<ProductDetailContent> = ({
    id,
    imgUrl,
    days,
    startTime,
    endTime,
    availableSlot,
    levelSlot,
    categorySlot,
    addressSlot
}) => {
    return (
        <div className="grid lg:grid-cols-9 grid-cols-1 gap-5 py-5">
            <div className="lg:col-span-6 md:h-[30rem] sm:h-[26rem] h-96 lg:h-full transition-all duration-500">
                <ImageCarousel
                    key={id}
                    id={id}
                    imgUrl={imgUrl}
                />
            </div>
            <div className="lg:col-span-3">
                <ProductDetail
                    key={id}
                    id={id}
                    days={days}
                    startTime={startTime}
                    endTime={endTime}
                    availableSlot={availableSlot}
                    levelSlot={levelSlot}
                    categorySlot={categorySlot}
                    addressSlot={addressSlot}
                />
            </div>
        </div>
    )
}

export default ProductContent