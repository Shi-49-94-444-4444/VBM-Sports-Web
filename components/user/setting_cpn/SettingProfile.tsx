'use client'

import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { AiFillCamera } from 'react-icons/ai'
import { Button, Input } from '../../providers'

const SettingProfile = () => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const urls = acceptedFiles.map((file) => URL.createObjectURL(file));
        setImageUrls(urls);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        },
        onDrop,
    });

    const handleClick = () => {

    }

    return (
        <div className="relative p-8 flex flex-col gap-5">
            <div className="text-gray-600 text-3xl font-semibold">Profile</div>
            <div className="relative flex flex-col w-2/5 gap-3 items-center">
                <div {...getRootProps()} className="relative w-full pb-[100%] border-2 border-gray-400 p-4 rounded-xl cursor-pointer">
                    <input {...getInputProps()} />
                    {imageUrls.length === 0 ? (
                        <Image
                            src="/images/avatar_1.png"
                            alt="upload"
                            className="object-cover"
                            fill
                        />
                    ) : (
                        <>
                            {imageUrls.map((imageUrl, index) => (
                                <Image
                                    key={index}
                                    src={imageUrl}
                                    alt={`Image ${index}`}
                                    className="object-cover rounded-xl"
                                    fill
                                />
                            ))}
                        </>
                    )}
                </div>
                <div className="flex flex-row text-primary-blue-cus items-center gap-2 whitespace-nowrap">
                    <AiFillCamera size={30} />
                    <span className="text-xl font-semibold">Đăng tải hình ảnh</span>
                </div>
            </div>
            <div className="border border-black border-opacity-10" />
            <div className="grid grid-cols-7 items-center">
                <div className="col-span-2">
                    <label className="text-gray-600 font-semibold text-xl">
                        Biệt danh:
                    </label>
                </div>
                <div className="col-span-5">
                    <Input
                        colorInput="bg-[#F5F5F5] border-none"
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 items-center">
                <div className="col-span-2">
                    <label className="text-gray-600 font-semibold text-xl">
                        Họ và tên:
                    </label>
                </div>
                <div className="col-span-5">
                    <Input
                        colorInput="bg-[#F5F5F5] border-none"
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 items-center">
                <div className="col-span-2">
                    <label className="text-gray-600 font-semibold text-xl">
                        Số điện thoại:
                    </label>
                </div>
                <div className="col-span-5">
                    <Input
                        colorInput="bg-[#F5F5F5] border-none"
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 items-center">
                <div className="col-span-2">
                    <label className="text-gray-600 font-semibold text-xl">
                        Quận/huyện:
                    </label>
                </div>
                <div className="col-span-5">
                    <Input
                        colorInput="bg-[#F5F5F5] border-none"
                    />
                </div>
            </div>
            <div className="grid grid-cols-7 items-center">
                <div className="col-span-2">
                    <label className="text-gray-600 font-semibold text-xl">
                        Mô tả:
                    </label>
                </div>
                <div className="col-span-5">
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
            <div className="relative flex justify-center">
                <Button
                    title="Lưu"
                    style="px-12 py-3 text-xl"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default SettingProfile;
