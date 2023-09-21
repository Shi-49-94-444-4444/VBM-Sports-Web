import { listBlog } from "@/utils";
import { FormatHomePage } from "../providers";
import IsMobileQuickBlog from "./QuickBlog/IsMobileQuickBlog";
import QuickBlogContent from "./QuickBlog/QuickBlogContent";


const PostNew = () => {
    return (
        <>
            <FormatHomePage title="Tin mới" link="/"/>
            <QuickBlogContent listItem={listBlog}/>
            <IsMobileQuickBlog listItem={listBlog}/>
        </>
    );
};

export default PostNew;
