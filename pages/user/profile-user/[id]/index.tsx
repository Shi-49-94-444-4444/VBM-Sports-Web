import {
    Container,
    ModalReportUser,
    ModalUserBanUser,
    UserOtherExtra,
    UserProfileContent
} from "@/app/components"
import UserFormComment from "@/app/components/user/profile/UserFormComment"
import UserProfileComments from "@/app/components/user/profile/UserProfileComments"
import Layout from "@/app/layout"
import Custom404 from "@/pages/404"
import Custom500 from "@/pages/500"
import { getListUserService, getUserProfileService } from "@/services"
import { UserProfile, UserProfileData } from "@/types"
import { sampleUserProfile } from "@/utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

// export const getStaticPaths: GetStaticPaths = async () => {
//     const users = await getListUserService()
//     const paths = users.data.map((user: UserProfileData) => ({
//         params: { id: user?.id?.toString() },
//     }))

//     return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async (context) => {
//     const id = context.params?.id

//     if (!id || Array.isArray(id)) {
//         return {
//             notFound: true,
//         }
//     }

//     try {
//         const User = await getUserProfileService(id)
//         if (User == null) {
//             return {
//                 notFound: true,
//             }
//         }

//         return {
//             props: {
//                 User,
//                 id
//             },
//             revalidate: 5
//         }
//     } catch (error) {
//         return {
//             props: {
//                 internalError: true
//             }
//         }
//     }
// }

// const ProfileUserPage = ({ User, internalError, id }: { User: UserProfile, internalError?: boolean, id: string }) => {
//     if (!User) {
//         return <Custom404 />
//     }

//     if (internalError) {
//         return <Custom500 />
//     }

//     return (
//         <Layout>
//             <ModalReportUser id={id} />
//             <ModalUserBanUser id={id} />
//             <Container>
//                 <UserProfileContent
//                     id={id}
//                     friendly={User.friendly}
//                     fullName={User.fullName}
//                     helpful={User.helpful}
//                     imgUrl={User.imgUrl}
//                     levelSkill={User.levelSkill}
//                     sortProfile={User.sortProfile}
//                     totalRate={User.totalRate}
//                     trusted={User.totalRate}
//                 />
//                 <UserFormComment id={id} />
//                 <UserProfileComments id={id} />
//                 <UserOtherExtra id={id} />
//             </Container>
//         </Layout>
//     )
// }

const ProfileUserPage = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id || Array.isArray(id)) {
        return <Custom404 />
    }

    const User = sampleUserProfile.data.find(user => user.id === id);

    if (!User) {
        return <Custom404 />
    }

    return (
        <Layout>
            <ModalReportUser id={id} />
            <ModalUserBanUser id={id} />
            <Container>
                <UserProfileContent
                    id={id}
                    friendly={User.friendly}
                    fullName={User.fullName}
                    helpful={User.helpful}
                    imgUrl={User.imgUrl}
                    levelSkill={User.levelSkill}
                    sortProfile={User.sortProfile}
                    totalRate={User.totalRate}
                    trusted={User.totalRate}
                />
                <UserFormComment id={id} />
                <UserProfileComments id={id} />
                <UserOtherExtra id={id} />
            </Container>
        </Layout>
    )
}

export default ProfileUserPage