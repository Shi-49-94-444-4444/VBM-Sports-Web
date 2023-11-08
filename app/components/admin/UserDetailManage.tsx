"use client"

import { AxiosClient } from "@/services"
import { UserDetailManage } from "@/types"
import { useRouter } from "next/router"
import { IoMdArrowRoundBack } from "react-icons/io"
import useSWR from "swr"
import { Button, LoadingFullScreen } from "../providers"
import { useRef, useState } from "react"
import { useOutsideClick } from "@/utils"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const UserDetailManage = () => {
    const [showToggleItemID, setShowToggleItemID] = useState<number | null>(null);
    const router = useRouter()

    const handleToggle = (itemID: number) => {
        if (showToggleItemID === itemID) {
            setShowToggleItemID(null)
        } else {
            setShowToggleItemID(itemID)
        }
    }

    const handleOutsideClick = () => {
        setShowToggleItemID(null)
    }

    const ref = useRef<HTMLDivElement | null>(null)
    useOutsideClick(ref, handleOutsideClick)

    const { id, fullName, role } = router.query

    const listTitleUserDetail = [
        { title: "ID" },
        { title: "Tên bài viết" },
        { title: "Ngày đăng" },
        { title: "Số lượng báo cáo" },
        { title: "Thao tác" }
    ]

    const listAction = [
        { title: "Xem bài viết", src: "" },
        { title: "Xem báo cáo", src: "" },
        { title: "Tạm ẩn bài viết", src: "" },
        { title: "Xoá bài viết", src: "" },
    ]

    const { data: listPostForUser, error, isLoading } = useSWR<UserDetailManage>(id ? `/api/posts/${id}/managed_all_post` : "", fetcher)

    return (
        <div className="relative flex flex-col px-6 py-10 gap-5">
            <div className="
                    flex 
                    text-gray-600 
                    pb-5
                    space-x-3
                    font-semibold
                    items-center
                "
            >
                <button className="relative" type="button" onClick={() => router.back()}>
                    <IoMdArrowRoundBack size={40} />
                </button>
                <h1 className="text-3xl">
                    Quản lý người dùng
                </h1>
            </div>
            <div className="flex justify-between pb-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    {fullName}
                </div>
                <div className="text-lg text-gray-500 font-semibold italic">
                    {role}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    Bài viết gần đây
                </div>
                {isLoading ? (
                    <LoadingFullScreen loading={isLoading} />
                ) : !listPostForUser ? (
                    <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold">
                        Không có sân nào
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold">
                        Lỗi API
                    </div>
                ) : (
                    <table className="table-auto border-separate border border-black border-opacity-10 rounded-lg text-lg text-center max-h-full text-gray-600 bg-[#EFEFEF]">
                        <thead>
                            <tr>
                                {listTitleUserDetail.map((item, index) => (
                                    <th className="font-semibold py-3 border-b border-black border-opacity-10" key={index}>
                                        {item.title}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {listPostForUser.data.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-3">{item.postId}</td>
                                    <td className="py-3"></td>
                                    <td className="py-3"></td>
                                    <td className="py-3"></td>
                                    <td className="py-3 relative">
                                        <button className=" cursor-pointer" type="button" onClick={() => handleToggle(index)}>
                                            ...
                                        </button>
                                        {showToggleItemID === index && (
                                            <div className="absolute right-[15rem] md:right-[17rem] lg:right-[17rem] sm:bottom-4 bottom-5 bg-gray-100 shadow-md rounded-lg w-auto translate-x-full translate-y-full transition p-2 z-[1001] text-left whitespace-nowrap" ref={ref}>
                                                <ul className="space-y-2 list-none">
                                                    {listAction.map((action, index) => (
                                                        <li className="hover:bg-slate-200 hover:text-primary-blue-cus p-2 cursor-pointer" key={index}>
                                                            <button type="button" onClick={() => { }}>
                                                                {action.title}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    Lựa chọn xử lý
                </div>
                <div className="relative flex gap-3">
                    <Button
                        title="Cấp quyền"
                        color="bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700"
                        style="py-1 px-4"
                    />
                    <Button
                        title="Tước quyền"
                        color="bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700"
                        style="py-1 px-4"
                    />
                    <Button
                        title="Gửi nhắc nhở"
                        color="bg-emerald-500 hover:bg-emerald-700 border-emerald-500 hover:border-emerald-700"
                        style="py-1 px-4"
                    />
                    <Button
                        title="Cấm bài đăng"
                        color="bg-orange-500 hover:bg-orange-700 border-orange-500 hover:border-orange-700"
                        style="py-1 px-4"
                    />
                    <Button
                        title="Mở khoá"
                        color="bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700"
                        style="py-1 px-4"
                    />
                    <Button
                        title="Khoá tài khoản"
                        color="bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700"
                        style="py-1 px-4"
                    />
                </div>
            </div>
        </div>
    )
}

export default UserDetailManage