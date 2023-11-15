"use client"

import { useRef, useState } from "react";
import { Search } from "../providers"
import { useOutsideClick } from "@/utils";

const PostManagement = () => {
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

    const listTitlePostManagement = [
        { title: "ID" },
        { title: "Tên bài viết" },
        { title: "Ngày đăng bài" },
        { title: "Ngày chỉnh sửa" },
        { title: "Tình trạng" },
        { title: "Lượt truy cập" },
        { title: "Lựa chọn" },
    ]

    const listPostManagement = [
        {
            id: "1",
            title: "Shi",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
            status: "Hoạt động",
            view: "999"
        },
        {
            id: "2",
            title: "Kami Shi",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
            status: "Hoạt động",
            view: "999"
        },
        {
            id: "3",
            title: "Yami",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
            status: "Hoạt động",
            view: "999"
        },
        {
            id: "4",
            title: "Shi",
            datePost: "10/9/2023",
            dateEdit: "10/9/2023",
            status: "Hoạt động",
            view: "999"
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
                <h1 className="font-semibold text-3xl">
                    Quản lý bài viết
                </h1>
                <Search value="" onChange={() => { }} style="md:w-2/5 w-full" />
            </div>
            <table className="table-auto border-collapse text-gray-600 text-center z-[1000]">
                <thead>
                    <tr>
                        {listTitlePostManagement.map((items, index) => (
                            <th className="text-lg font-semibold border border-black border-opacity-10 py-2" key={index}>{items.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="border-b border-black border-opacity-10 text-base font-medium">
                    {listPostManagement.map((items) => (
                        <tr key={items.id}>
                            <td className="py-3 border-l border-r border-black border-opacity-10">{items.id}</td>
                            <td className="py-3 border-r border-black border-opacity-10 truncate">{items.title}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.datePost}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.dateEdit}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.status}</td>
                            <td className="py-3 border-r border-black border-opacity-10">{items.view}</td>
                            <td className="py-3 border-r border-black border-opacity-10 relative">
                                <button className=" cursor-pointer" type="button" onClick={() => handleToggle(items.id)}>
                                    ...
                                </button>
                                {showToggleItemID === items.id && (
                                    <div className="absolute right-[13rem] md:right-[15rem] sm:bottom-4 bottom-5 bg-gray-100 shadow-md rounded-lg w-auto translate-x-full translate-y-full transition p-2 z-[1001] text-left whitespace-nowrap" ref={ref}>
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

export default PostManagement