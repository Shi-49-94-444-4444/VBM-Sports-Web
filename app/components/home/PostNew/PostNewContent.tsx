import { PostNewContent } from "@/types";
import Image from "next/image";
import { Container } from "../../providers";

const PostNewContent: React.FC<PostNewContent> = ({
    listItem
}) => {
    return (
        <div className="
                xl:block 
                lg:block 
                md:hidden 
                hidden
            "
        >
            <Container>
                <div className="
                        grid 
                        grid-cols-2 
                        gap-5
                    "
                >
                    <div key={listItem[0].id} className="col-span-1">
                        <div className="
                                relative 
                                h-full
                                transition
                                duration-300
                                hover:scale-105
                                cursor-pointer
                                group
                            "
                        >
                            <div className="
                                    absolute 
                                    top-0 
                                    left-0 
                                    w-full 
                                    h-full
                                    transition
                                    duration-300
                                "
                            >
                                <Image
                                    src={listItem[0].src}
                                    alt="PostNew"
                                    className="object-cover"
                                    fill
                                />
                            </div>
                            <div className="
                                    absolute 
                                    bottom-2 
                                    left-4 
                                    text-white
                                "
                            >
                                <h1 className="text-sm">
                                    {listItem[0].date}
                                </h1>
                                <p className="
                                        text-lg 
                                        font-semibold
                                    "
                                >
                                    {listItem[0].title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="
                                grid 
                                grid-rows-2 
                                gap-3
                            "
                        >
                            <div key={listItem[1].id} className="row-span-1">
                                <div className="
                                        relative 
                                        h-full 
                                        transition
                                        duration-300
                                        hover:scale-105
                                        cursor-pointer
                                    "
                                >
                                    <div className="
                                            absolute 
                                            top-0 
                                            left-0 
                                            w-full 
                                            h-full
                                            transition
                                            duration-300
                                        "
                                    >
                                        <Image
                                            src={listItem[1].src}
                                            alt="PostNew"
                                            className="object-cover"
                                            fill
                                        />
                                    </div>
                                    <div className="
                                            absolute 
                                            bottom-2 
                                            left-4 
                                            text-white
                                        "
                                    >
                                        <h1 className="text-sm">
                                            {listItem[1].date}
                                        </h1>
                                        <p className="text-lg font-semibold">
                                            {listItem[1].title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row-span-1">
                                <div className="
                                        grid 
                                        grid-cols-2 
                                        gap-3
                                    "
                                >
                                    <div key={listItem[2].id} className="col-span-1">
                                        <div className="
                                                relative 
                                                h-full
                                                transition
                                                duration-300
                                                hover:scale-105
                                                cursor-pointer
                                            "
                                        >
                                            <div className="
                                                    absolute 
                                                    top-0 
                                                    left-0 
                                                    w-full 
                                                    h-full
                                                    transition
                                                    duration-300
                                                "
                                            >
                                                <Image
                                                    src={listItem[2].src}
                                                    alt="PostNew"
                                                    className="object-cover"
                                                    fill
                                                />
                                            </div>
                                            <div className="
                                                    absolute 
                                                    bottom-2 
                                                    left-4 
                                                    text-white
                                                "
                                            >
                                                <h1 className="text-sm">
                                                    {listItem[3].date}
                                                </h1>
                                                <p className="text-lg font-semibold">
                                                    {listItem[1].title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div key={listItem[3].id} className="col-span-1">
                                        <div className="
                                                relative 
                                                pb-[100%]
                                                transition
                                                duration-300
                                                hover:scale-105
                                                cursor-pointer
                                            "
                                        >
                                            <div className="
                                                    absolute 
                                                    top-0 
                                                    left-0 
                                                    w-full 
                                                    h-full
                                                    transition
                                                    duration-300
                                                "
                                            >
                                                <Image
                                                    src={listItem[3].src}
                                                    alt="PostNew"
                                                    className="object-cover"
                                                    fill
                                                />
                                            </div>
                                            <div className="
                                                    absolute 
                                                    bottom-2 
                                                    left-4 
                                                    text-white
                                                "
                                            >
                                                <h1 className="text-sm">
                                                    {listItem[3].date}
                                                </h1>
                                                <p className="text-lg font-semibold">
                                                    {listItem[3].title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default PostNewContent;
