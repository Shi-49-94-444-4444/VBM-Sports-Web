import { listItems } from "@/utils"
import { ProductOther } from "../providers"

const OtherExtra = () => {
    const sliceItems = listItems.slice(0, 12)

    return (
        <div className="relative py-10">
            <div className="flex flex-col mb-10">
                <div className="
                        flex 
                        flex-row 
                        justify-between 
                        items-center
                        transition
                        duration-300
                    "
                >
                    <div className="
                            w-1/3 
                            h-1 
                            bg-orange-cus
                            hidden
                            lg:block
                        "
                    />
                    <div className="
                            text-gray-600 
                            font-semibold
                            lg:text-3xl
                            md:text-2xl 
                            text-xl
                            uppercase
                            text-center
                            transition
                            duration-300
                        "
                    >
                        Other Player
                    </div>
                    <div className="
                            w-1/3 
                            h-1 
                            bg-orange-cus
                            hidden
                            lg:block
                        "
                    />
                </div>
            </div>
            <div className="relative">
                <div className="
                        grid 
                        xl:grid-cols-4 
                        lg:grid-cols-3
                        md:grid-cols-2
                        grid-cols-1
                        gap-5
                    "
                >
                    {/* {sliceItems.map((item) => (
                        <ProductOther
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            description={item.description}
                            timeClose={item.timeClose}
                            timeOpen={item.timeOpen}
                            slot={item.slot}
                        />
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default OtherExtra