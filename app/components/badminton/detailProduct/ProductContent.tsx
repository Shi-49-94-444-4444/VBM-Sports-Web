import ProductImage from "./ProductImage"
import ProductPostUser from "./ProductPostUser"

interface ProductContentProps {
    src: string;
}

const ProductContent: React.FC<ProductContentProps> = ({
    src
}) => {
    return (
        <div className="grid grid-cols-7 gap-5">
            <ProductImage src={src} />
            <ProductPostUser />
        </div>
    )
}

export default ProductContent