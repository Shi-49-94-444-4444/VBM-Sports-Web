import { 
  Banner, 
  QuickList, 
  PostNew, 
  QuickBanner 
} from "@/app/components"
import Footer from "@/app/components/Footer";
import Layout from '@/app/layout';

const home = () => {
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

export default home