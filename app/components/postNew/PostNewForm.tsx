"use client"

import { useState } from "react"
import PostNewInput from "./PostNewInput"
import ThumbGallery from "./ThumbsGallery"

const PostNewForm = () => {
    const [uploadImages, setUploadImages] = useState<string[]>([])

    const onSubmit = async () => {
        console.log(uploadImages)
    }

    return (
        <form className="grid lg:grid-cols-2 grid-cols-1 gap-10" onSubmit={onSubmit}>
            <div className="col-span-1">
                <ThumbGallery setImages={setUploadImages}/>
            </div>
            <div className="col-span-1">
                <PostNewInput />
            </div>
        </form>
    )
}

export default PostNewForm