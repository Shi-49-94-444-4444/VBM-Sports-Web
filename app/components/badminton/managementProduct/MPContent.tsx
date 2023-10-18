import Image from "next/image"
import { Button } from "../../providers"

const MPContent = () => {
    return (
        <div className="lg:grid lg:grid-cols-4 flex flex-col gap-3">
            <div className="relative lg:col-span-3 border border-black border-opacity-10 rounded-xl transition duration-500">
                <div className="md:grid md:grid-cols-9 flex flex-col gap-3">
                    <div className="col-span-4 relative md:h-full h-96">
                        <Image
                            src="/images/item_1.jpg"
                            alt="product"
                            sizes="(max-width: 600px) 100vw, 600px"
                            className="object-fill md:rounded-l-xl md:rounded-r-none rounded-t-xl w-auto h-auto"
                            fill
                        />
                    </div>
                    <section className="col-span-5 flex flex-col gap-3 text-lg text-gray-600 p-3 h-full justify-center">
                        <h1 className="text-2xl font-semibold truncate">
                            Tập luyện cùng tôi nào!!!
                        </h1>
                        <p className="line-clamp-3">
                            Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn ...
                        </p>
                        <section className="space-x-1 transition duration-500">
                            <span className="">
                                Địa chỉ:
                            </span>
                            <span className="">
                                218/20 Đ. Vườn Lài, Phú Thọ Hoà, Tân Phú
                            </span>
                        </section>
                        <section className="flex space-x-1 truncate">
                            <label>
                                Thời gian:
                            </label>
                            <p>
                                6h30-8h30
                            </p>
                        </section>
                        <section className="flex space-x-1 gap-1">
                            <label>
                                Ngày bắt đầu:
                            </label>
                            <p>
                                10/12/2023
                            </p>
                        </section>
                        <div className="flex space-x-3 xl:space-x-3 xl:flex-row lg:space-x-0 lg:flex-col lg:gap-3 transition duration-500">
                            <section className="flex space-x-1">
                                <span>
                                    Số lượng chỗ:
                                </span>
                                <span>
                                    4
                                </span>
                            </section>
                            <section className="flex space-x-1">
                                <span>
                                    Người đặt chỗ:
                                </span>
                                <span>
                                    4
                                </span>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
            <div className="relative lg:col-span-1 p-3 h-full border border-black border-opacity-10 rounded-xl transition duration-500">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <div className="flex lg:flex-col lg:gap-3 lg:space-x-0 flex-row space-x-3">
                        <div className="text-2xl font-semibold text-primary-blue-cus text-center">
                            100.000 VND/Chỗ
                        </div>
                        <div className="flex xl:flex-row lg:flex-col space-x-1 text-lg items-center flex-wrap justify-center">
                            <span className="text-gray-600">
                                Tình trạng bài viết:
                            </span>
                            <span className="text-green-600 font-semibold">
                                Hoạt động
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full grid grid-cols-2 gap-3 md:gap-0 md:flex md:space-x-3 lg:flex-col lg:gap-3 lg:space-x-0 ">
                        <div className="relative w-full col-span-1">
                            <Button
                                title="Trò chuyện nhóm"
                                style="w-full justify-center items-center px-2"
                            />
                        </div>
                        <div className="relative w-full col-span-1">
                            <Button
                                title="Chỉnh sửa bài viết"
                                style="w-full justify-center items-center px-2"
                            />
                        </div>
                        <div className="relative w-full col-span-1">
                            <Button
                                title="Xoá bài viết"
                                style="w-full justify-center items-center px-2"
                            />
                        </div>
                        <div className="relative w-full col-span-1">
                            <Button
                                title="Ẩn bài viết"
                                style="w-full justify-center items-center px-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MPContent