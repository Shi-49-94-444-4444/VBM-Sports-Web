import Image from "next/image"
import { AiFillStar } from "react-icons/ai"
import { User } from "@/types"
import { ButtonCus } from "../../providers"

const ProductPostUser: React.FC<User> = ({
    id,
    name,
    src,
    description,
    rating,
    skillLevel
}) => {
    return (
        <div className="col-span-2" key={id}>
            <div className="
                    bg-gray-200 
                    flex 
                    flex-col 
                    w-full 
                    rounded-xl 
                    p-6 
                    gap-8
                "
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
                            src={src!}
                            alt="avatar"
                            objectFit="cover"
                            width="100"
                            height="100"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="font-semibold text-xl">
                            {name}
                        </div>
                        <ButtonCus
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
                        {description}
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
                                    {rating}/5
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
                                    {skillLevel}/5
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
                <ButtonCus
                    title="Join now"
                    style="py-4 justify-center"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default ProductPostUser