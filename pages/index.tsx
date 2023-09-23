import { 
  Banner, 
  BlogOtherExtra, 
  QuickList, 
} from "@/app/components"
import Layout from '@/app/layout';

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