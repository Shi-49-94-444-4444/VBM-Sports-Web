import { Blog } from "@/types"
import Image from "next/image"
import { FormatDate } from "../providers"

const BlogContent: React.FC<Blog> = ({
    id,
    src,
    title,
    date,
    description,
    poster
}) => {
    return (
        <section className="flex flex-col gap-10" key={id}>
            <section className="flex flex-col gap-3 text-center">
                <h1 className="text-4xl font-semibold">
                    {title}
                </h1>
                <h2 className="text-gray-500 text-xl font-normal">
                    <FormatDate dateString={date!} />
                </h2>
            </section>
            <section className="flex flex-col gap-5 text-gray-600 text-xl font-normal">
                <p>
                    {description}
                </p>
                <p>
                    {description}
                </p>
                <div className="
                        relative
                        pb-[50%]
                        transition
                        duration-300
                        overflow-hidden
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
                            className="object-cover"
                            fill
                        />
                    </div>
                </div>
                <p>
                    {description}
                </p>
                <p>
                    {description}
                </p>
            </section>
            <div className="ml-auto font-medium text-xl italic">
                By: {poster}
            </div>
        </section>
    )
}

export default BlogContent