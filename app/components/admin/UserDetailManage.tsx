"use client"

import { AxiosClient } from "@/services"
import { UserDetailManage } from "@/types"
import { useRouter } from "next/router"
import { IoMdArrowRoundBack } from "react-icons/io"
import useSWR from "swr"
import { Button, LoadingFullScreen, ModalAdminBan, ModalAdminDeletePost, ModalAdminDownRole, ModalAdminUnBan, ModalAdminUpRole } from "../providers"
import { useContext, useRef, useState } from "react"
import { useOutsideClick, validateTitle } from "@/utils"
import { useAdminBanModal, useAdminDeletePostModal, useAdminDownRoleModal, useAdminUnBanModal, useAdminUpRoleModal } from "@/hooks"
import { GlobalContext } from "@/contexts"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const UserDetailManage = () => {
    const [showToggleItemID, setShowToggleItemID] = useState<number | null>(null)
    const router = useRouter()
    const adminBanModal = useAdminBanModal()
    const adminUnBanModal = useAdminUnBanModal()
    const adminUpRoleModal = useAdminUpRoleModal()
    const adminDownRoleModal = useAdminDownRoleModal()
    const adminDeletePostModal = useAdminDeletePostModal()
    const { user } = useContext(GlobalContext) || {}

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

    const { id } = router.query

    const listTitleUserDetail = [
        { title: "ID" },
        { title: "Tên bài viết" },
        { title: "Ngày đăng" },
        { title: "Số lượng báo cáo" },
        { title: "Thao tác" }
    ]

    const listAction = [
        { title: "Xem bài viết", src: (postId: string) => router.push(`/product/detail-product/${postId}`) },
        { title: "Xem báo cáo", src: () => { } },
        { title: "Xoá bài viết", src: (postId: string) => { adminDeletePostModal.onOpen(postId) } },
    ]

    const { data: listPostForUser, error } = useSWR<UserDetailManage>(user && user.id && id ? `/api/users/admin/${user.id}/user/${id}/detail` : null, fetcher, { refreshInterval: 10000 })

    const isLoadingData = !listPostForUser && !error

    return (
        <div className="relative flex flex-col px-6 py-10 gap-5">
            <ModalAdminBan user_id={id ? id.toString() : ""} />
            <ModalAdminDeletePost user_id={id ? id.toString() : ""} />
            <ModalAdminUnBan user_id={id ? id.toString() : ""} />
            <ModalAdminUpRole user_id={id ? id.toString() : ""} />
            <ModalAdminDownRole user_id={id ? id.toString() : ""} />
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
                <h1 className="md:text-4xl text-3xl">
                    Quản lý người dùng
                </h1>
            </div>
            <div className="flex justify-between pb-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    {listPostForUser ? listPostForUser.data.fullName : ""}
                </div>
                <div className="text-lg text-gray-500 font-semibold italic">
                    {listPostForUser ? listPostForUser.data.role : ""}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="text-2xl text-gray-600 font-semibold">
                    Bài viết gần đây
                </div>
                {isLoadingData ? (
                    <LoadingFullScreen loading={isLoadingData} />
                ) : !listPostForUser || !listPostForUser.data.posts ? (
                    <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold h-40">
                        Không có sân nào
                    </div>
                ) : error ? (
                    <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold h-40">
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
                            {listPostForUser.data.posts.map((item, index) => (
                                <tr key={index}>
                                    <td className="py-3">{item.id ?? ""}</td>
                                    <td className="py-3">{validateTitle(item.title)}</td>
                                    <td className="py-3">{item.postTime ?? ""}</td>
                                    <td className="py-3">{item.numOfReport ?? 0}</td>
                                    <td className="py-3 relative">
                                        <button className=" cursor-pointer" type="button" onClick={() => handleToggle(index)}>
                                            ...
                                        </button>
                                        {showToggleItemID === index && (
                                            <div className="absolute right-[13rem] md:right-[17rem] lg:right-[17rem] sm:bottom-4 bottom-5 bg-gray-100 shadow-md rounded-lg w-auto translate-x-full translate-y-full transition p-2 z-[1001] text-left whitespace-nowrap" ref={ref}>
                                                <ul className="space-y-2 list-none">
                                                    {listAction.map((action, index) => (
                                                        <li className="hover:bg-slate-200 hover:text-primary-blue-cus p-2 cursor-pointer" key={index}>
                                                            <button type="button" onClick={() => action.src(item.id ? item.id : "")}>
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
                    {user && user.role && user.role.toLowerCase() === "admin" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "user" ? (
                        <Button
                            title="Cấp quyền"
                            color="bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700"
                            style="py-1 px-4"
                            onClick={adminUpRoleModal.onOpen}
                        />
                    ) : (
                        <></>
                    )}
                    {user && user.role && user.role.toLowerCase() === "admin" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "staff" ? (
                        <Button
                            title="Tước quyền"
                            color="bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700"
                            style="py-1 px-4"
                            onClick={adminDownRoleModal.onOpen}
                        />
                    ) : (
                        <></>
                    )}
                    {user && user.role && user.role.toLowerCase() === "admin" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "user" ||
                        user && user.role && user.role.toLowerCase() === "staff" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "user" ? (
                        <Button
                            title="Gửi nhắc nhở"
                            color="bg-emerald-500 hover:bg-emerald-700 border-emerald-500 hover:border-emerald-700"
                            style="py-1 px-4"
                        />
                    ) : (
                        <></>
                    )}
                    {user && user.role && user.role.toLowerCase() === "admin" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "user" ||
                        user && user.role && user.role.toLowerCase() === "staff" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "user" ||
                        user && user.role && user.role.toLowerCase() === "admin" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "staff" ? (
                        listPostForUser && listPostForUser.data.isBanded === true && (
                            <Button
                                title="Mở khoá"
                                color="bg-green-500 hover:bg-green-700 border-green-500 hover:border-green-700"
                                style="py-1 px-4"
                                onClick={adminUnBanModal.onOpen}
                            />
                        )
                    ) : (
                        <></>
                    )}
                    {user && user.role && user.role.toLowerCase() === "admin" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "user" ||
                        user && user.role && user.role.toLowerCase() === "staff" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "user" ||
                        user && user.role && user.role.toLowerCase() === "admin" && listPostForUser && listPostForUser.data.role.toString().toLowerCase() === "staff" ? (
                        listPostForUser && listPostForUser.data.isBanded === false && (
                            <Button
                                title="Khoá tài khoản"
                                color="bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700"
                                style="py-1 px-4"
                                onClick={adminBanModal.onOpen}
                            />
                        )
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserDetailManage