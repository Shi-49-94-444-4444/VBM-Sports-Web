import { ProductItems } from "@/types";
import ProductContent from "./ProductContent";

const ProductItems: React.FC<ProductItems> = ({
    listItem
}) => {
    return (
        <div className="
                col-span-4 
                h-auto
                w-full
            "
        >
            {listItem.map((item) => (
                <ProductContent
                    key={item.id}
                    src={item.src}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    timeOpen={item.timeOpen}
                    timeClose={item.timeClose}
                    slot={item.slot}
                />
            ))}
        </div>
    )

}

export default ProductItems