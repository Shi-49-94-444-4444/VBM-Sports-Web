import { Product, User } from "@/types";
import ProductImage from "./ProductImage"
import ProductPostUser from "./ProductPostUser"
interface ProductContentProps {
    product: Product;
    user: User;
}

const ProductContent: React.FC<ProductContentProps> = ({
    product,
    user
}) => {
    return (
        <div className="grid grid-cols-7 gap-5">
            <ProductImage 
                key={product.id} 
                id={product.id} 
                src={product.src} 
            />
            <ProductPostUser 
                key={user.id} 
                id={user.id} 
                src={user.src} 
                name={user.name}
                description={user.description}
                rating={user.rating}
                skillLevel={user.skillLevel}
            />
        </div>
    )
}

export default ProductContent