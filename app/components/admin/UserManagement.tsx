"use client"

import { useContext, useRef, useState } from "react";
import { LoadingFullScreen, Search } from "../providers"
import { useRouter } from "next/navigation";
import { AxiosClient } from "@/services";
import useSWR from "swr";
import { GlobalContext } from "@/contexts";
import { ManageUser } from "@/types";
import { useOutsideClick } from "@/utils";

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const UserManagement = () => {
    const [showToggleItemID, setShowToggleItemID] = useState<number | null>(null)
    const [searchTerm, setSearchTerm] = useState<string>("")
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

    const { user } = useContext(GlobalContext) || {}

    const listTitleUserManagement = [
        { title: "ID" },
        { title: "Họ và tên" },
        { title: "Ngày tạo" },
        { title: "Role" },
        { title: "Tình trạng" },
        { title: "Lần cập nhật cuối" },
        { title: "Lựa chọn" },
    ]

    const listAction = [
        { title: "Xem chi tiết tài khoản", src: (userId: String | null) => `/admin/user-detail-management/${userId}` },
        { title: "Xem trang cá nhân", src: (userId: String | null) => "" },
    ]

    const { data: listManageUser, error, isLoading } = useSWR<ManageUser>(user ? `/api/users/managed/${user.id}` : "", fetcher)

    const filteredUsers = listManageUser && listManageUser.data && listManageUser.data.filter(user => user.fullName && user.fullName.toLowerCase().includes(searchTerm.toLowerCase()))

    console.log(searchTerm)

    return (
        <form className="relative flex flex-col px-6 py-10">
            <div className="
                    flex 
                    flex-col 
                    text-gray-600 
                    gap-5
                    pb-10
                    md:flex-row 
                    md:justify-between 
                    md:items-center 
                    md:gap-0
                "
            >
                <h1 className="font-semibold text-3xl flex-shrink-0">
                    Quản lý người dùng
                </h1>
                <div className="flex flex-col space-y-1 w-auto">
                    <Search value={searchTerm} onChange={setSearchTerm} style="w-full" />
                    {filteredUsers && filteredUsers.length === 0 && (
                        <p className="text-lg text-red-500 font-medium h-3">
                            Người dùng không tồn tại
                        </p>
                    )}
                </div>
            </div>
            {isLoading ? (
                <LoadingFullScreen loading={isLoading} />
            ) : listManageUser && listManageUser.data == null ? (
                <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold">
                    Không có người dùng nào tồn tại
                </div>
            ) : error ? (
                <div className="flex items-center justify-center text-3xl text-primary-blue-cus font-semibold">
                    Lỗi API
                </div>
            ) : (
                <table className="table-auto border-separate border border-black border-opacity-10 rounded-lg text-lg text-gray-600 text-center min-h-[36rem] max-h-full table">
                    <thead>
                        <tr>
                            {listTitleUserManagement.map((item, index) => (
                                <th className={`
                                font-semibold 
                                py-3 
                                ${index < listTitleUserManagement.length - 1 ?
                                        "border-r border-b border-black border-opacity-10" :
                                        "border-b"
                                    }`}
                                    key={index}
                                >
                                    {item.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-base font-medium">
                        {!filteredUsers ? (
                            <tr>
                                <td>Không có người dùng tồn tại</td>
                            </tr>
                        ) : (
                            filteredUsers.map((user, index) => (
                                <tr key={index}>
                                    <td className="py-3 border-r border-black border-opacity-10">{user.userId}</td>
                                    <td className="py-3 border-r border-black border-opacity-10">{user.fullName}</td>
                                    <td className="py-3 border-r border-black border-opacity-10">{user.createDate}</td>
                                    <td className="py-3 border-r border-black border-opacity-10">{user.role}</td>
                                    <td className="py-3 border-r border-black border-opacity-10">{user.status}</td>
                                    <td className="py-3 border-r border-black border-opacity-10">{user.lastLogin}</td>
                                    <td className="py-3 relative">
                                        <button className=" cursor-pointer" type="button" onClick={() => handleToggle(index)}>
                                            ...
                                        </button>
                                        {showToggleItemID === index && (
                                            <div className="absolute right-[15rem] md:right-[17rem] lg:right-[18rem] sm:bottom-4 bottom-5 bg-gray-100 shadow-md rounded-lg w-auto translate-x-full translate-y-full transition p-2 z-[1001] text-left whitespace-nowrap" ref={ref}>
                                                <ul className="space-y-2 list-none">
                                                    {listAction.map((action, index) => (
                                                        <li className="hover:bg-slate-200 hover:text-primary-blue-cus p-2 cursor-pointer" key={index}>
                                                            <button type="button" onClick={() => { router.push(`${action.src(user.userId)}?fullName=${user.fullName}&role=${user.role}`) }}>
                                                                {action.title}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            )}
        </form>
    )
}

export default UserManagement