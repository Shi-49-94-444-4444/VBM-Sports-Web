"use client"

import { useRef, useState } from "react";
import { Button, Search } from "../providers"
import { IoMdAdd } from "react-icons/io";
import { useOutsideClick } from "@/utils";

const ReportManagement = () => {
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
                <h1 className="font-semibold text-3xl whitespace-nowrap">
                    Báo cáo thường niên
                </h1>
                <div className="
                        flex 
                        flex-col
                        gap-5
                        md:flex-row 
                        md:w-full 
                        md:justify-end 
                        md:items-center 
                        md:space-x-3
                        md:gap-0
                    "
                >
                    <Search value="" onChange={() => { }} style="md:w-2/5 w-full" />
                    <div className="relative">
                        <Button
                            title="Tạo báo cáo mới"
                            iconLeft={<IoMdAdd size={30} />}
                            style=""
                            onClick={() => { }}
                        />
                    </div>
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
                            <td className="py-3 border-r border-black border-opacity-10 relative">
                                <button className=" cursor-pointer" type="button" onClick={() => handleToggle(items.id)}>
                                    ...
                                </button>
                                {showToggleItemID === items.id && (
                                    <div className="absolute right-[14rem] sm:right-[16rem] md:right-[17rem] xl:right-[18rem] bottom-4 bg-gray-100 shadow-md rounded-lg w-auto translate-x-full translate-y-full transition p-2 z-[1001] text-left whitespace-nowrap" ref={ref}>
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

export default ReportManagement