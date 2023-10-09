import { UserProfile } from "@/types"
import UserProfileIntro from "./UserProfileIntro"
import UserProfileRating from "./UserProfileRating"

const UserProfileContent: React.FC<UserProfile> = ({
    friendly,
    fullName,
    helpful,
    imgUrl,
    levelSkill,
    sortProfile,
    totalRate,
    trusted
}) => {
    return (
        <div className="flex flex-col gap-5 py-10">
            <UserProfileIntro
                imgUrl={imgUrl}
                fullName={fullName}
                sortProfile={sortProfile}
            />
            <UserProfileRating
                levelSkill={levelSkill}
                totalRate={totalRate}
                friendly={friendly}
                trusted={trusted}
                helpful={helpful}
            />
        </div>
    )
}

export default UserProfileContent