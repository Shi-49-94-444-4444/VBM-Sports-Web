import { Container, Footer, UserOtherExtra } from '@/app/components';
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