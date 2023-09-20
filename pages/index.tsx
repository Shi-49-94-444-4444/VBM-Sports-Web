import { 
  Banner, 
  QuickList, 
  PostNew, 
  QuickBanner, 
} from "@/app/components"
import Layout from '@/app/layout';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <QuickList />
      <QuickBanner />
      <PostNew />
    </Layout>
  )
}

export default Home