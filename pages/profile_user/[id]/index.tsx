import { Container, Footer } from '@/app/components';
import UserOtherExtra from '@/app/components/user/profile/UserOtherExtra';
import UserProfileContent from '@/app/components/user/profile/UserProfileContent';
import { listUser } from '@/app/constants';
import Layout from '@/app/layout';

const ProfileUser = () => {
    return (
        <Layout>
            <Container>
                <UserProfileContent listItems={listUser}/>
                <UserOtherExtra />
            </Container>
            <Footer />
        </Layout>
    )
}

export default ProfileUser