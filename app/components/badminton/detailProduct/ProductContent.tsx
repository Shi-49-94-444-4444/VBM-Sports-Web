import { Product, User } from "@/types";
import ProductPostUser from "./ProductPostUser"
import { ImageCarousel } from "../../providers";
interface ProductContentProps {
    product: Product;
    user: User;
}

const ProductContent: React.FC<ProductContentProps> = ({
    product,
    user
}) => {
    return (
        <div className="grid grid-cols-7 gap-5 py-5">
            <div className="col-span-5" >
                <ImageCarousel
                    key={product.id}
                    id={product.id}
                    image={product.image}
                />
            </div>
            <div className="col-span-2">
                <ProductPostUser
                    product={product}
                    user={user}
                />
            </div>
        </div>
    )
}

export default ProductContent