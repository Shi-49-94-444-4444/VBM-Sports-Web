'use client'

import { Blog } from "@/types";
import Image from "next/image"
import Link from "next/link";

const BlogItemOther: React.FC<Blog> = ({
    id,
    src,
    title,
    description,
    date
}) => {
    return (
        <Link href={`/blog/${id}`}>
            <div className="
                col-span-1
                grid
                grid-cols-3
                rounded-xl
                border-2
                border-black
                border-opacity-10
                cursor-pointer
                transition-all
                duration-500
            "
                key={id}
            >
                <div className="
                        relative
                        col-span-1
                        h-full
                        transition-all
                    "
                >
                    <div className="
                            absolute 
                            top-0 
                            left-0 
                            w-full 
                            h-full
                        "
                    >
                        <Image
                            src={src}
                            alt="blog"
                            className="
                            rounded-xl 
                            object-cover
                        "
                            fill
                            draggable="false"
                        />
                    </div>
                </div>
                <div className="col-span-2 p-6 flex flex-col gap-5">
                    <section className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold text-gray-600 line-clamp-2">
                            {title}
                        </h1>
                        <p className="text-gray-500 text-lg line-clamp-5">
                            {description}
                        </p>
                    </section>
                    <div className="text-[#8B96A5] text-lg ml-auto">
                        {date}
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default BlogItemOther