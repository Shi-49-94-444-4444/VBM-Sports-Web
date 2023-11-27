"use client"

import { Button, Container, LoadingFullScreen, ProductOther } from "../providers"
import { ListProduct } from "@/types"
import { useContext } from "react"
import { GlobalContext } from "@/contexts"
import { AxiosClient } from "@/services"
import useSWR from 'swr'
import { useRouter } from "next/navigation"
import Image from "next/image"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const QuickList = () => {
    const { user } = useContext(GlobalContext) || {}
    const router = useRouter()

    const { data: listProduct, error, isLoading } = useSWR<ListProduct>(user ? `/api/posts/${user.id}/post_suggestion` : `/api/posts/GetListPost`, fetcher)

    if (isLoading) {
        return <LoadingFullScreen loading={isLoading} />
    }

    if (listProduct && listProduct.data.length < 0) {
        return (
            <div className="relative flex flex-col space-x-3 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Không tìm thấy danh sách sản phẩm</p>
                <div className="relative">
                    <Image
                        src="/images/sad.gif"
                        alt="Gif"
                        width={100}
                        height={100}
                        className="object-contain md:w-32 md:h-32 h-20 w-20 transition-all duration-500"
                    />
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="relative flex flex-col space-x-3 items-center justify-center h-96 text-primary-blue-cus">
                <p className="text-3xl font-semibold">Đã xảy ra lỗi khi tải danh sách sản phẩm - error 500</p>
                <div className="relative">
                    <Image
                        src="/images/sad.gif"
                        alt="Gif"
                        width={100}
                        height={100}
                        className="object-contain md:w-32 md:h-32 h-20 w-20 transition-all duration-500"
                    />
                </div>
            </div>
        )
    }

    const sliceItems = listProduct && listProduct.data.length > 0 ? listProduct.data.slice(0, 12) : []

    return (
        <div className="relative py-10">
            <Container>
                <div className="
                        grid
                        xl:grid-cols-4
                        lg:grid-cols-3
                        md:grid-cols-2
                        grid-cols-1
                        gap-2
                        transition-all
                        duration-500
                    "
                >
                    {sliceItems.map((items, index) => (
                        <ProductOther
                            key={items.idPost || index}
                            idPost={items.idPost}
                            title={items.title}
                            addressSlot={items.addressSlot}
                            contentPost={items.contentPost}
                            days={items.days}
                            endTime={items.endTime}
                            quantitySlot={items.quantitySlot}
                            startTime={items.startTime}
                            fullName={items.fullName}
                            userImgUrl={items.userImgUrl}
                            price={items.price}
                            highlightUrl={items.highlightUrl}
                            userId={items.userId}
                        />
                    ))}
                </div>
                <div className="relative flex justify-center items-center pt-16">
                    <Button
                        title="Xem thêm"
                        onClick={() => router.replace("/product/list-product")}
                        style="py-3 px-12 text-xl"
                    />
                </div>
            </Container>
        </div>
    );
};

export default QuickList;
