import {
    Container,
    UserOtherExtra,
    UserProfileContent
} from '@/app/components';
import Layout from '@/app/layout';
import Custom500 from '@/pages/500';
import { getListUserService, getUserProfileService } from '@/services';
import { UserProfile } from '@/types';
import { GetStaticPaths, GetStaticProps } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const users = await getListUserService();
        const paths = users.map((user: UserProfile) => ({
            params: { id: user?.id?.toString() },
        }));

        return { paths, fallback: false };
    } catch (error) {
        console.log(error)
        return { paths: [], fallback: false };
    }
};

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id

    if (!id || Array.isArray(id)) {
        return {
            notFound: true,
        }
    }

    try {
        const res = await getUserProfileService(id)
        if (res && res.status === 200) {
            const User = res.data
            return {
                props: {
                    User
                },
                revalidate: 60
            }
        } else if (res && res.status === 404) {
            return {
                notFound: true,
            }
        } else {
            return {
                props: {
                    internalError: true
                }
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                internalError: true
            }
        }
    }
};

const ProfileUserPage = ({ User, internalError }: { User: UserProfile, internalError?: boolean }) => {
    if (internalError || !User) {
        return <Custom500 />
    }

    return (
        <Layout>
            <Container>
                <UserProfileContent
                    friendly={User.friendly}
                    fullName={User.fullName}
                    helpful={User.helpful}
                    imgUrl={User.imgUrl}
                    levelSkill={User.levelSkill}
                    sortProfile={User.sortProfile}
                    totalRate={User.totalRate}
                    trusted={User.totalRate}
                />
                <UserOtherExtra />
            </Container>
        </Layout>
    )
}

export default ProfileUserPage