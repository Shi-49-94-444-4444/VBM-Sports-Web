import Layout from '@/app/layout';
import { Banner, BlogOtherExtra, QuickList } from '@/components';

const Home = () => {
    return (
        <Layout>
            <Banner />
            <QuickList />
            <BlogOtherExtra />
        </Layout>
    )
}

export default Home