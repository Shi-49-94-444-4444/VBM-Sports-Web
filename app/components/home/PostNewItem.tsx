import { PostNewItemProps } from "@/types";
import Image from "next/image";

const PostNewItem: React.FC<PostNewItemProps> = ({ src, description }) => {
    return (
        <div className={`
            flex 
            flex-col 
            bg-white 
            pb-5 
            px-3 
            rounded-lg 
            items-center 
            gap-5
            shadow-lg 
            border-2 
            border-black
        `}>
            <div className={`
                relative
                w-full
                aspect-[16/11]
            `}>
                <Image
                    src={src}
                    alt="postnew"
                    className="rounded-lg"
                    layout="fill"
                    objectFit="contain"
                />
            </div>
            <div className="line-clamp-6">{description}</div>
        </div>
    );
};

export default PostNewItem;
