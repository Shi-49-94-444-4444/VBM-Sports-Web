import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import { Product, User } from "@/types"
import { Button } from "../../providers"
import { useRouter } from "next/router";

interface ProductPostUserProps {
    product: Product;
    user: User;
}

const ProductPostUser: React.FC<ProductPostUserProps> = ({
    product,
    user
}) => {
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push(`/payment/${product.id}`);
    };

    return (
        <div className="
                bg-gray-200 
                flex 
                flex-col 
                w-full 
                rounded-xl 
                p-6 
                gap-8
            "
            key={user.id}
        >
            <div className="
                    flex 
                    flex-row 
                    gap-5 
                    items-center
                "
            >
                <div className="relative flex-shrink-0">
                    <Image
                        src={user.src!}
                        alt="avatar"
                        width="100"
                        height="100"
                        className="rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <div className="font-semibold text-xl">
                        {user.name}
                    </div>
                    <Button
                        title="Visit bio"
                        style="py-3"
                        onClick={() => { }}
                    />
                </div>
            </div>
            <div className="border-black border-b-[1px] border-opacity-10" />
            <div className="flex flex-col gap-3">
                <h2 className="font-semibold text-base">
                    Short bio:
                </h2>
                <p className="
                        font-normal 
                        text-sm 
                        line-clamp-5 
                        text-gray-500
                    "
                >
                    {user.description}
                </p>
            </div>
            <div className="
                    grid 
                    grid-cols-3 
                    divide-x 
                    divide-black 
                    divide-opacity-10
                "
            >
                <div className="col-span-1">
                    <div className="
                            flex 
                            flex-col 
                            items-center 
                            gap-3
                        "
                    >
                        <h2 className="font-semibold text-base">
                            Rating:
                        </h2>
                        <div className="flex items-center gap-1">
                            <p className="
                                    font-normal 
                                    text-sm 
                                    text-gray-500 
                                    whitespace-nowrap
                                "
                            >
                                {user.rating}/5
                            </p>
                            <AiFillStar className="text-yellow-500" size={15} />
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="
                            flex 
                            flex-col 
                            items-center 
                            gap-3
                        "
                    >
                        <h2 className="font-semibold text-base">
                            Skill level:
                        </h2>
                        <div className="flex items-center gap-1">
                            <p className="
                                    font-normal 
                                    text-sm 
                                    text-gray-500 
                                    whitespace-nowrap
                                "
                            >
                                {user.skillLevel}/5
                            </p>
                            <AiFillStar className="text-yellow-500" size={15} />
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex flex-col items-center gap-3">
                        <h2 className="font-semibold text-base">
                            Active
                        </h2>
                        <div className="relative bg-[#00FF66] p-2 rounded-full"></div>
                    </div>
                </div>
            </div>
            <Button
                title="Join now"
                style="py-4 justify-center"
                onClick={handleClick}
            />
        </div>
    )
}

export default ProductPostUser