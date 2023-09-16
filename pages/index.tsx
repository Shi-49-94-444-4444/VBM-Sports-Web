import { 
  Banner, 
  QuickList, 
  PostNew, 
  QuickBanner, 
  Footer
} from "@/app/components"
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