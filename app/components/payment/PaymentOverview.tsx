import { Product } from "@/types"
import { ImageCarousel } from "../providers"

const PaymentOverview: React.FC<Product> = ({
    id,
    image
}) => {
    return (
        <div className="relative grid grid-cols-5 bg-[#F5F5F5] rounded-lg my-5 gap-5">
            <div className="col-span-2">
                <ImageCarousel
                    key={id}
                    id={id}
                    image={image}
                />
            </div>
            <div className="col-span-3 p-6">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-row justify-between">
                        <div className="text-3xl font-semibold">
                            Tony Mack
                        </div>
                        <div className="ml-auto text-3xl text-red-500 font-semibold">
                            50$
                        </div>
                    </div>
                    <div className="flex flex-row text-gray-600 text-xl font-medium space-x-8">
                        <ul className="space-y-4">
                            <li>Location:</li>
                            <li>From:</li>
                            <li>Time:</li>
                            <li>Address:</li>
                            <li>Avaiable slot:</li>
                        </ul>
                        <ul className="space-y-4">
                            <li>Location:</li>
                            <li>From:</li>
                            <li>Time:</li>
                            <li>Address:</li>
                            <li>Avaiable slot:</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentOverview