"use client"

import { useRef, useState } from "react";
import { Search } from "../providers";
import { useOutsideClick } from "@/utils";

const UserReportManagement = () => {
    const [showToggleItemID, setShowToggleItemID] = useState<string | null>(null);

    const handleToggle = (itemID: string) => {
        if (showToggleItemID === itemID) {
            setShowToggleItemID(null)
        } else {
            setShowToggleItemID(itemID)
        }
    }

    const handleOutsideClick = () => {
        setShowToggleItemID(null);
    }

    const ref = useRef<HTMLDivElement | null>(null)
    useOutsideClick(ref, handleOutsideClick)

    const listTitleReportManagement = [
        { title: "ID" },
        { title: "Lỗi vi phạm" },
        { title: "Nội dung" },
        { title: "Ngày nhận" },
        { title: "Tình trạng" },
        { title: "Lựa chọn" },
    ]

    const listReportManagement = [
        {
            id: "1",
            violation: "Lừa đảo",
            content: "Không có",
            date: "10/9/2023",
            status: "Đã xử lý",
        },
        {
            id: "2",
            violation: "Lừa đảo",
            content: "Không có",
            date: "10/9/2023",
            status: "Đã xử lý",
        },
        {
            id: "3",
            violation: "Lừa đảo",
            content: "Không có",
            date: "10/9/2023",
            status: "Đã xử lý",
        },
        {
            id: "4",
            violation: "Lừa đảo",
            content: "Không có",
            date: "10/9/2023",
            status: "Đã xử lý",
        },
    ]

    const listAction = [
        { title: "Xem chi tiết" },
        { title: "Xóa" },
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
                    Danh sách báo cáo
                </h1>
                <Search value="" onChange={() => { }} style="md:w-2/5 w-full" />
            </div>
            <table className="table-auto border-collapse text-gray-600 text-center z-[1000]">
                <thead>
                    <tr>
                        {listTitleReportManagement.map((items, index) => (
                            <th className="text-lg font-semibold border border-black border-opacity-10 py-2" key={index}>{items.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="border-b border-black border-opacity-10 text-base font-medium">
                    {listReportManagement.map((items) => (
                        <tr key={items.id}>
                            <td className="py-3 border-l border-r border-black border-opacity-10">{items.id}</td>
                            <td className="py-3 border-r border-black border-opacity-10 truncate">{items.violation}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.content}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.date}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.status}</td>
                            <td className="py-3 border-r border-black border-opacity-10 relative">
                                <button className=" cursor-pointer" type="button" onClick={() => handleToggle(items.id)}>
                                    ...
                                </button>
                                {showToggleItemID === items.id && (
                                    <div className="absolute right-[10rem] sm:right-[12rem] md:right-[13rem] sm:bottom-4 bottom-5 bg-gray-100 shadow-md rounded-lg w-auto translate-x-full translate-y-full transition p-2 z-[1001] text-left whitespace-nowrap" ref={ref}>
                                        <ul className="space-y-2 list-none">
                                            {listAction.map((items, index) => (
                                                <li className="hover:bg-slate-200 hover:text-primary-blue-cus p-2 cursor-pointer" key={index}>
                                                    {items.title}
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
        </section>
    )
}

export default UserReportManagement