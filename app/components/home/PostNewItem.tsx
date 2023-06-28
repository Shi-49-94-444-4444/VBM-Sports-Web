import Image from "next/image"

interface PostNewItemProps {
    src: string;
    description: string;
}

const PostNewItem: React.FC<PostNewItemProps> = ({
    src,
    description,
}) => {
    return (
        <div className="flex flex-col bg-white py-5 px-3 rounded-lg items-center space-y-5 shadow-lg border-2 border-solid border-black">
            <div className="relative w-[600px] h-[300px]">
                <Image
                    src={src}
                    alt="postnew"
                    className="rounded-lg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="line-clamp-6">
                {description}
            </div>
        </div>
    )
}

export default PostNewItem