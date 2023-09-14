import { User } from "@/types"
import { Rating } from "../../modal"

const UserProfileRating: React.FC<User> = ({
    skillLevel,
    rating,
    friendly,
    trusted,
    helpful
}) => {
    return (
        <div className="relative flex flex-col py-10 gap-5">
            <div className="grid grid-cols-6 items-center">
                <div className="text-xl font-medium text-gray-600">
                    Skill level:
                </div>
                <Rating rating={skillLevel} maxStars={5} sizeCus={30} />
            </div>
            <div className="grid grid-cols-6 items-center">
                <div className="text-xl font-medium text-gray-600">
                    Rating:
                </div>
                <Rating rating={rating} maxStars={5} sizeCus={30} />
            </div>
            <div className="grid grid-cols-6 items-center">
                <div className="text-xl font-medium text-gray-600">
                    Friendly:
                </div>
                <Rating rating={friendly} maxStars={5} sizeCus={30} />
            </div>
            <div className="grid grid-cols-6 items-center">
                <div className="text-xl font-medium text-gray-600">
                    Trusted:
                </div>
                <Rating rating={trusted} maxStars={5} sizeCus={30} />
            </div>
            <div className="grid grid-cols-6 items-center">
                <div className="text-xl font-medium text-gray-600">
                    Helpful:
                </div>
                <Rating rating={helpful} maxStars={5} sizeCus={30} />
            </div>
        </div>
    )
}

export default UserProfileRating