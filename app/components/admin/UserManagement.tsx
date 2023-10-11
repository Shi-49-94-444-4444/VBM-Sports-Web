"use client"

import { useState } from "react";
import { Search } from "../providers"
import OutsideClickHandler from "react-outside-click-handler";
import { useRouter } from "next/navigation";

const UserManagement = () => {
    const [showToggleItemID, setShowToggleItemID] = useState<string | null>(null);
    const router = useRouter()

    const handleToggle = (itemID: string) => {
        if (showToggleItemID === itemID) {
            setShowToggleItemID(null)
        } else {
            setShowToggleItemID(itemID)
        }
    };

    const handleOutsideClick = () => {
        setShowToggleItemID(null);
    };

    const listTitleUserManagement = [
        { title: "ID" },
        { title: "Họ và tên" },
        { title: "Ngày tạo" },
        { title: "Role" },
        { title: "Tình trạng" },
        { title: "Lần cập nhật cuối" },
        { title: "Lựa chọn" },
    ]

    const listUserManagement = [
        {
            id: "1",
            name: "Shi",
            date: "10/9/2023",
            role: "admin",
            status: "Hoạt động",
            onlineDate: "10/9/2023",
        },
        {
            id: "2",
            name: "Shi",
            date: "10/9/2023",
            role: "admin",
            status: "Hoạt động",
            onlineDate: "10/9/2023",
        },
        {
            id: "3",
            name: "Shi",
            date: "10/9/2023",
            role: "admin",
            status: "Hoạt động",
            onlineDate: "10/9/2023",
        },
        {
            id: "4",
            name: "Shi",
            date: "10/9/2023",
            role: "admin",
            status: "Hoạt động",
            onlineDate: "10/9/2023",
        },
    ]

    const listAction = [
        { title: "Xem chi tiết tài khoản", src: "/admin/detail-user" },
        { title: "Xem trang cá nhân", src: "" },
    ]

    return (
        <section className="relative flex flex-col px-6 py-10">
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
                <h1 className="font-semibold text-3xl">
                    Quản lý người dùng
                </h1>
                <Search value="" onChange={() => { }} style="md:w-2/5 w-full" />
            </div>
            <table className="table-auto border-collapse text-gray-600 text-center z-[1000]">
                <thead>
                    <tr>
                        {listTitleUserManagement.map((items, index) => (
                            <th className="text-lg font-semibold border border-black border-opacity-10 py-2" key={index}>{items.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="border-b border-black border-opacity-10 text-base font-medium">
                    {listUserManagement.map((items) => (
                        <tr key={items.id}>
                            <td className="py-3 border-l border-r border-black border-opacity-10">{items.id}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.name}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.date}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.role}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.status}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.onlineDate}</td>
                            <td className="py-3 border-r border-black border-opacity-10 relative">
                                <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                                    <button className=" cursor-pointer" type="button" onClick={() => handleToggle(items.id)}>
                                        ...
                                    </button>
                                    {showToggleItemID === items.id && (
                                        <div className="absolute right-[15rem] md:right-[17rem] lg:right-[18rem] sm:bottom-4 bottom-5 bg-gray-100 shadow-md rounded-lg w-auto translate-x-full translate-y-full transition p-2 z-[1001] text-left whitespace-nowrap">
                                            <ul className="space-y-2 list-none">
                                                {listAction.map((items, index) => (
                                                    <li className="hover:bg-slate-200 hover:text-primary-blue-cus p-2 cursor-pointer" key={index}>
                                                        <button type="button" onClick={() => router.push(items.src)}>
                                                            {items.title}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </OutsideClickHandler>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default UserManagement