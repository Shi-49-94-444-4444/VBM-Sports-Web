
import { postNew } from "@/app/constants";
import FormatHomePage from "./FormatHomePage";
import PostNewContent from "./PostNew/PostNewContent";

const PostNew = () => {
    return (
        <>
            <FormatHomePage title="Tin mới" />
            <PostNewContent listItem={postNew}/>
        </>
    );
};

export default PostNew;
