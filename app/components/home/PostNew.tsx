
import { postNew } from "@/constant";
import PostNewContent from "./PostNew/PostNewContent";
import IsMobilePostNew from "./PostNew/IsMobilePostNew"
import { FormatHomePage } from "../providers";

const PostNew = () => {
    return (
        <>
            <FormatHomePage title="Tin mới" link="/"/>
            <PostNewContent listItem={postNew}/>
            <IsMobilePostNew listItem={postNew}/>
        </>
    );
};

export default PostNew;
