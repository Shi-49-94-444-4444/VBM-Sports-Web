"use client"

import { ProductDetailContentData } from "@/types";
import { Button, Rating, Share } from "../../providers";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { validateDes, validateName, validateTitle, validateURLAvatar } from "@/utils";

const ProductUserPost: React.FC<ProductDetailContentData> = ({
    id,
    title,
    contentPost,
    imgUrlUser,
    sortProfile,
    fullName,
    totalRate,
    userId
}) => {
    const router = useRouter()

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        router.push(`/user/profile-user/${userId}`)
        event.preventDefault()
    }

    return (
        <div className="relative py-10" key={id}>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-gray-600">
                        Mô tả:
                    </h3>
                    <p className="text-lg text-gray-500">
                        {validateDes(contentPost)}
                    </p>
                </div>
                <div className="
                        flex 
                        flex-row
                        gap-5
                        items-center
                    "
                >
                    <div className="relative flex-shrink-0">
                        <Image
                            src={validateURLAvatar(imgUrlUser)}
                            alt="avatar"
                            className="object-cover rounded-full w-40 h-40"
                            width={120}
                            height={120}
                            draggable="false"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center">
                            <h1 className="text-3xl text-gray-600 font-semibold">
                                {validateName(fullName)}
                            </h1>
                            <Rating rating={totalRate ?? 0} maxStars={5} sizeCus={20} />
                        </div>
                        <div className="relative">
                            <Button
                                title="Xem trang cá nhân"
                                style=""
                                onClick={handleClick}
                            />
                        </div>
                        <div className="text-gray-500 text-xl line-clamp-3">
                            {validateDes(sortProfile)}
                        </div>
                    </div>
                </div>
                <Share />
            </div>
        </div>
    )
}

export default ProductUserPost