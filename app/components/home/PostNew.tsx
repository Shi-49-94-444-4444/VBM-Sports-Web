
import { postNew } from "@/app/constants";
import FormatHomePage from "./FormatHomePage";
import PostNewContent from "./PostNew/PostNewContent";
import IsMobilePostNew from "./PostNew/IsMobilePostNew"

const PostNew = () => {
    return (
        <>
            <FormatHomePage title="Tin mới" />
            <PostNewContent listItem={postNew}/>
            <IsMobilePostNew listItem={postNew}/>
        </>
    );
};

export default PostNew;
