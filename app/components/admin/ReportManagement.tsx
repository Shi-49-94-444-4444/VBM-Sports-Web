"use client"

import { useState } from "react";
import { Button, Search } from "../providers"
import OutsideClickHandler from "react-outside-click-handler";
import { GrAdd, GrFormAdd } from "react-icons/gr"
import { IoMdAdd } from "react-icons/io";

const ReportManagement = () => {
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
        { title: "Tựa đề" },
        { title: "Ngày tạo" },
        { title: "Ngày chỉnh sửa" },
        { title: "Lựa chọn" },
    ]

    const listUserManagement = [
        {
            id: "1",
            title: "Shi",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
        },
        {
            id: "2",
            title: "Kami Shi",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
        },
        {
            id: "3",
            title: "Yami",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
        },
        {
            id: "4",
            title: "Shi",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
        },
    ]

    const listAction = [
        { title: "Duyệt bài viết" },
        { title: "Xem bài viết" },
        { title: "Chỉnh sửa bài viết" },
        { title: "Tạm ẩn bài viết" },
        { title: "Xoá bài viết" },
    ]

    return (
        <section className="relative flex flex-col px-6 py-10">
            <div className="flex flex-row justify-between items-center text-gray-600 pb-10">
                <h1 className="font-semibold text-3xl whitespace-nowrap">
                    Báo cáo thường niên
                </h1>
                <div className="flex flex-row w-full justify-end items-center space-x-3">
                    <Search value="" onChange={() => { }} />
                    <Button
                        title="Tạo báo cáo mới"
                        iconLeft={<IoMdAdd size={30} />}
                        style=""
                        onClick={() => { }}
                    />
                </div>
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
                            <td className="py-3 border-r border-black border-opacity-10 truncate">{items.title}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.datePost}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.dateEdit}</td>
                            <td className="py-3 border-r border-black border-opacity-10">
                                <button className=" cursor-pointer" type="button" onClick={() => handleToggle(items.id)}>
                                    ...
                                </button>
                            </td>
                            {showToggleItemID === items.id && (
                                <OutsideClickHandler onOutsideClick={handleOutsideClick}>
                                    <div className="absolute bg-gray-100 shadow-md rounded-lg w-auto top-auto left-auto bottom-auto right-0 -translate-x-40 translate-y-7 transition p-2 z-[1001] text-left">
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

export default ReportManagement