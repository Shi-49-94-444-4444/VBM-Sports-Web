import { 
    Container, 
    UserOtherExtra, 
    UserProfileContent 
} from '@/app/components';
import { listUser } from '@/utils';
import Layout from '@/app/layout';

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