
import { postNew } from "@/app/constants";
import FormatHomePage from "../providers/form/FormatHomePage";
import PostNewContent from "./PostNew/PostNewContent";
import IsMobilePostNew from "./PostNew/IsMobilePostNew"

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
