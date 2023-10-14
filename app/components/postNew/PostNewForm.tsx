"use client"

import PostNewInput from "./PostNewInput"
import ThumbGallery from "./ThumbsGallery"

const PostNewForm = () => {
    return (
        <form className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className="col-span-1">
                <ThumbGallery />
            </div>
            <div className="col-span-1">
                <PostNewInput />
            </div>
        </form>
    )
}

export default PostNewForm