import { Container, ProductOther } from "../providers";
import { ListProducts } from "@/types";

const QuickList: React.FC<ListProducts> = ({ listProduct }) => {
    const sliceItems = listProduct && listProduct.length > 0 ? listProduct.slice(0, 12) : []

    return (
        <div className="relative py-10">
            <Container>
                <div className="
                        grid
                        xl:grid-cols-4
                        lg:grid-cols-3
                        md:grid-cols-2
                        grid-cols-1
                        gap-2
                        transition-all
                        duration-500
                    "
                >
                    {sliceItems?.map((items) => (
                        <ProductOther
                            key={items.id}
                            id={items.id}
                            title={items.title}
                            idUserToNavigation={items.idUserToNavigation}
                            addressSlot={items.addressSlot}
                            contentPost={items.contentPost}
                            days={items.days}
                            endTime={items.endTime}
                            imgUrl={items.imgUrl}
                            quantitySlot={items.quantitySlot}
                            startTime={items.startTime}
                            flagTooltip
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default QuickList;
