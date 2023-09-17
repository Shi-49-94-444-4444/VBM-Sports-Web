import { 
  Banner, 
  QuickList, 
  PostNew, 
  QuickBanner, 
  Footer
} from "@/app/components"
import Layout from '@/app/layout';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <QuickList />
      <QuickBanner />
      <PostNew />
      <Footer />
    </Layout>
  )
}

export default Home