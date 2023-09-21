import { BlogCarousel } from "../providers"

const BlogOtherExtra = () => {
    return (
        <div className="relative py-10">
            <div className="flex flex-col mb-10">
                <div className="
                        flex 
                        flex-row 
                        justify-between 
                        items-center
                        transition-all
                        duration-500
                    "
                >
                    <div className="
                            w-1/3 
                            h-1 
                            bg-orange-cus
                            hidden
                            lg:block
                        "
                    />
                    <div className="
                            text-gray-600 
                            font-semibold
                            lg:text-3xl
                            md:text-2xl 
                            text-xl
                            uppercase
                            text-center
                            transition-all
                            duration-500
                        "
                    >
                        Other New
                    </div>
                    <div className="
                            w-1/3 
                            h-1 
                            bg-orange-cus
                            hidden
                            lg:block
                        "
                    />
                </div>
            </div>
            <BlogCarousel />
        </div>
    )
}

export default BlogOtherExtra