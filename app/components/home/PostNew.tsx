
import { postNew } from "@/utils";
import { FormatHomePage } from "../providers";
import { IsMobileQuickBlog, QuickBlogContent } from "./QuickBlog";

const PostNew = () => {
    return (
        <>
            <FormatHomePage title="Tin mới" link="/"/>
            <QuickBlogContent listItem={postNew}/>
            <IsMobileQuickBlog listItem={postNew}/>
        </>
    );
};

export default PostNew;
