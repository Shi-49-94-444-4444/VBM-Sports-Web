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
        <div className="grid lg:grid-cols-7 grid-cols-1 gap-5 py-5">
            <div className="lg:col-span-5 md:h-96 sm:h-80 h-72 lg:h-full transition-all duration-500">
                <ImageCarousel
                    key={product.id}
                    id={product.id}
                    image={product.image}
                />
            </div>
            <div className="lg:col-span-2">
                <ProductPostUser
                    product={product}
                    user={user}
                />
            </div>
        </div>
    )
}

export default ProductContent