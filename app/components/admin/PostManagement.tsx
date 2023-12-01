"use client"

import { useRef, useState } from "react";
import { Button, DownMetalBtn, Search } from "../providers"
import { useOutsideClick } from "@/utils";
import { IoMdAdd } from "react-icons/io";

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
        { title: "Xem bài viết" },
        { title: "Xoá bài viết" },
    ]

    return (
        <>
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
                    <h1 className="font-semibold md:text-4xl text-3xl flex-shrink-0">
                        Quản lý tin tức
                    </h1>
                    <div className="flex gap-3 flex-col md:flex-row transition-all duration-500 flex-wrap justify-end">
                        <DownMetalBtn onClick={() => { }} />
                        <div className="flex flex-col space-y-1 md:w-auto w-full transition-all duration-500">
                            <Search value={""} onChange={() => { }} style="w-full" />
                        </div>
                    </div>
                </div>
                <table className="table-auto border-collapse text-gray-600 text-center z-[1000] text-sm sm:text-base md:text-lg">
                    <thead>
                        <tr>
                            {listTitlePostManagement.map((items, index) => (
                                <th className="text-lg font-semibold border border-black border-opacity-10 py-2" key={index}>{items.title}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="border-b border-black border-opacity-10 font-medium">
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
            <div className="fixed bottom-5 right-5">
                <Button
                    title="Tạo tin tức"
                    iconLeft={<IoMdAdd size={30} />}
                    style="px-4 py-3"
                    onClick={() => { }}
                />
            </div>
        </>
    )
}

export default PostManagement