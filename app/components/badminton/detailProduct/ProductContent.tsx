import { ProductDetailContentData } from "@/types";
import ProductDetail from "./ProductDetail"
import { ImageCarousel } from "../../providers";

const ProductContent: React.FC<ProductDetailContentData> = ({
    id,
    imageUrls,
    days,
    startTime,
    endTime,
    availableSlot,
    levelSlot,
    categorySlot,
    addressSlot,
    quantitySlot
}) => {
    return (
        <div className="grid lg:grid-cols-9 grid-cols-1 gap-5 py-5">
            <div className="lg:col-span-6 md:h-[30rem] sm:h-[26rem] h-96 lg:h-full transition-all duration-500">
                <ImageCarousel
                    key={id}
                    id={id}
                    imageUrls={imageUrls}
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
                    quantitySlot={quantitySlot}
                />
            </div>
        </div>
    )
}

export default ProductContent