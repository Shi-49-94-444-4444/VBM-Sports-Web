import {
  Banner,
  BlogOtherExtra,
  QuickList,
} from "@/app/components"
import Layout from '@/app/layout';
import { getListProductService, getProductSuggestService } from "@/services/product";
import { ListProduct } from "@/types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const { token, userID } = req.cookies;

  if (token) {
    const Product = await getProductSuggestService(userID ?? "1")

    return {
      props: {
        Product,
      },
    };
  }

  const Product = await getListProductService()
  return {
    props: {
      Product,
    },
  };
}


const Home = ({ Product }: { Product: ListProduct[] }) => {
  return (
    <Layout>
      <Banner />
      <QuickList listProduct={Product} />
      <BlogOtherExtra />
    </Layout>
  )
}


export default Home