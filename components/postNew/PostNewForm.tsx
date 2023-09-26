'use client'

import Select from "react-select"
import { Button } from "../providers"
import Input from "../providers/form/Input"

const PostNewForm = () => {
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: 'none',
            paddingLeft: '1rem',
            marginLeft: '0px',
            backgroundColor: '#F5F5F5',
            paddingTop: '5px',
            paddingBottom: '5px',
            boxShadow: 'none !important',
            "*": {
                boxShadow: "none !important",
            },
            '&:hover': {
                border: 'none !important',
                boxShadow: 'none !important',
                outline: 'none !important',
            },
            '&:focus': {
                border: 'none !important',
                boxShadow: 'none !important',
                outline: 'none !important',
            },
        }),
    };

    const handleClick = () => {

    }

    return (
        <div className="relative">
            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Tên bài đăng:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Địa chỉ:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="location"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Ngày:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="date"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Thời gian:</label>
                    </div>
                    <div className="col-span-2">
                        <Select
                            styles={customStyles}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Giá:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="price"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="number"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Số lượng chỗ:</label>
                    </div>
                    <div className="col-span-2">
                        <Select
                            styles={customStyles}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Mode:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="mode"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Kĩ năng yêu cầu:</label>
                    </div>
                    <div className="col-span-2">
                        <Select
                            styles={customStyles}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Mô tả:</label>
                        <p className="text-lg text-gray-600"> Từ 200 -300 từ </p>
                    </div>
                    <div className="col-span-2">
                        <div className="relative flex items-center">
                            <textarea
                                className="
                                    bg-[#F5F5F5]
                                    w-full 
                                    rounded-lg 
                                    outline-none
                                    border-none
                                    focus:ring-0
                                    text-base
                                    py-3    
                                    px-6
                                    transition
                                    duration-300
                                "
                                rows={5}
                                typeof="text"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1">
                    <div className="lg:col-span-1" />
                    <div className="lg:col-span-2 col-span-1 py-4 flex justify-center">
                        <Button
                            title="Confirm"
                            style="px-16 py-3 text-xl"
                            onClick={handleClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewForm