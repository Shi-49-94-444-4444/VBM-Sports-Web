"use client"

import { useState } from "react";
import { Search } from "../providers"
import OutsideClickHandler from "react-outside-click-handler";

const UserManagement = () => {
    const [showToggleItemID, setShowToggleItemID] = useState<string | null>(null);

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
        { title: "Xem chi tiết tài khoản" },
        { title: "Xem chi trang cá nhân" },
    ]

    return (
        <section className="relative flex flex-col px-6 py-10">
            <div className="flex flex-row justify-between items-center text-gray-600 pb-10">
                <h1 className="font-semibold text-3xl">
                    Quản lý người dùng
                </h1>
                <Search value="" onChange={() => { }} />
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
                            <td className="py-3 border-r border-black border-opacity-10">
                                <button className=" cursor-pointer" type="button" onClick={() => handleToggle(items.id)}>
                                    ...
                                </button>
                            </td>
                            {showToggleItemID === items.id && (
                                <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                                    <div className="absolute bg-gray-100 shadow-md rounded-lg w-auto top-auto left-auto bottom-auto right-0 -translate-x-[7.5rem] translate-y-5 transition p-2 z-[1001] text-left">
                                        <ul className="space-y-2 list-none">
                                            {listAction.map((items, index) => (
                                                <li className="hover:bg-slate-200 hover:text-primary-blue-cus p-2 cursor-pointer" key={index}>
                                                    {items.title}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </OutsideClickHandler>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default UserManagement