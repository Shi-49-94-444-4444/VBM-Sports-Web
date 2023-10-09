import {
    Container,
    UserOtherExtra,
    UserProfileContent
} from '@/app/components';
import Layout from '@/app/layout';
import { getUserProfileService } from '@/services';
import { UserProfile } from '@/types';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;

    if (!id || Array.isArray(id)) {
        return {
            notFound: true,
        };
    }

    try {
        const User = await getUserProfileService(id);
        return {
            props: {
                User,
            },
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
};

const ProfileUser = ({ User }: { User: UserProfile }) => {
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

export default ProfileUser