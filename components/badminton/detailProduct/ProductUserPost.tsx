'use client'

import { Product, User } from "@/types"
import { Button, Rating, Share } from "../../providers"
import Image from "next/image"
import { useRouter } from "next/navigation"

interface ProductUserPostProps {
    product: Product
    user: User
}

const ProductUserPost: React.FC<ProductUserPostProps> = ({
    product,
    user
}) => {
    const router = useRouter()

    return (
        <div className="relative py-10" key={product.id}>
            <div className="flex flex-col gap-10">
                <div className="
                        flex 
                        flex-col 
                        font-semibold 
                        gap-1
                    "
                >
                    <h2 className="text-3xl">
                        {product.title}
                    </h2>
                    <p className="text-red-500 text-3xl">
                        {product.price} VND/Slot
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold text-gray-600">
                        Mô tả:
                    </h3>
                    <p className="text-lg text-gray-500">
                        {product.description}
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
                            src={user.src!}
                            alt="avatar"
                            className="object-cover rounded-full"
                            width={120}
                            height={120}
                            draggable="false"
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-3 items-center">
                            <h1 className="text-xl text-gray-600 font-semibold">
                                {user.name}
                            </h1>
                            <Rating rating={user.rating} maxStars={5} sizeCus={20} />
                        </div>
                        <div className="relative">
                            <Button
                                title="Xem trang cá nhân"
                                style=""
                                onClick={() => { router.push(`/profile_user/${user.id}`); }}
                            />
                        </div>
                        <div className="text-gray-500 text-xl">
                            Tôi là một người chơi vừa mới tập mong mọi người chỉ giáo thêm
                        </div>
                    </div>
                </div>
                <Share />
            </div>
        </div>
    )
}

export default ProductUserPost