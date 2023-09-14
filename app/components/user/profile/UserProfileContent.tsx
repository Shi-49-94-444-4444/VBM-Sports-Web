import { listUser } from "@/types"
import UserProfileIntro from "./UserProfileIntro"
import UserProfileRating from "./UserProfileRating"
import UserFormComment from "./UserFormComment"
import UserProfileComments from "./UserProfileComments"

const UserProfileContent: React.FC<listUser> = ({
    listItems
}) => {
    const item = listItems[1]
    return (
        <div className="flex flex-col gap-5 py-10">
            <UserProfileIntro
                key={item.id}
                id={item.id}
                src={item.src}
                name={item.name}
                description={item.description}
            />
            <UserProfileRating
                key={item.id}
                id={item.id}
                skillLevel={item.skillLevel}
                rating={item.rating}
                friendly={item.friendly}
                trusted={item.trusted}
                helpful={item.helpful}
            />
            <UserFormComment />
            <UserProfileComments
                key={item.id}
                id={item.id}
                comments={item.comments}
            />
        </div>
    )
}

export default UserProfileContent