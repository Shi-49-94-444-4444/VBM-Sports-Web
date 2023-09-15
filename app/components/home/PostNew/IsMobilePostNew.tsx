import { PostNewContent } from "@/types";
import Image from "next/image";
import { Container } from "../../providers";

const IsMobilePostNew: React.FC<PostNewContent> = ({
    listItem
}) => {
    return (
        <div className="
                lg:hidden
                block
            "
        >
           <Container>
                <div className="
                        grid 
                        grid-cols-1 
                        gap-3
                        mb-5
                    "
                >
                    {listItem.slice(0, 4).map((item) => (
                        <div key={item.id} className="col-span-1">
                            <div className="
                                    relative 
                                    pb-[50%] 
                                    transition-all
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
                                        transition-all
                                        duration-300
                                    "
                                >
                                    <Image
                                        src={item.src}
                                        alt="PostNew"
                                        layout="fill"
                                        objectFit="cover"
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
                                        {item.date}
                                    </h1>
                                    <p className="
                                            text-lg 
                                            font-semibold
                                        "
                                    >
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default IsMobilePostNew;
