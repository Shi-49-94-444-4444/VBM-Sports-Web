import { 
    Container, 
    Footer, 
    UserOtherExtra, 
    UserProfileContent 
} from '@/app/components';
import { listUser } from '@/constant';
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