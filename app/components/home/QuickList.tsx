import { listItems } from "@/utils";
import { Container, ProductOther } from "../providers";

const QuickList = () => {
    const sliceItems = listItems.slice(0, 12)

    return (
        <div className="relative py-10">
            <Container>
                <div className="
                        grid
                        xl:grid-cols-4
                        lg:grid-cols-3
                        md:grid-cols-2
                        grid-cols-1
                        gap-5
                        transition-all
                        duration-500
                    "
                >
                    {sliceItems.map((items) => (
                        <ProductOther
                            key={items.id}
                            id={items.id}
                            title={items.title}
                            description={items.description}
                            slot={items.slot}
                            image={items.image}
                            timeClose={items.timeClose}
                            timeOpen={items.timeOpen}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default QuickList;
