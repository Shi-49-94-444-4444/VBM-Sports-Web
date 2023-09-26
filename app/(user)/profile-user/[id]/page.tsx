
import { listUser } from '@/utils';
import Layout from '@/app/layout';
import { Container, UserOtherExtra, UserProfileContent } from '@/components';

const ProfileUser = () => {
    return (
        <Layout>
            <Container>
                <UserProfileContent listItems={listUser}/>
                <UserOtherExtra />
            </Container>
        </Layout>
    )
}

export default ProfileUser