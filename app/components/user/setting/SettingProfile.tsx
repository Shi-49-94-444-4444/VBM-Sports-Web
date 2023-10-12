"use client"

import Image from 'next/image';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AiFillCamera } from 'react-icons/ai';
import { Button, Input, Loading, LoadingFullScreen } from '../../providers';
import { GlobalContext } from '@/contexts';
import { AxiosClient, getUserProfileSettingService, putProfileUserService } from '@/services';
import { FormUserProfileSetting, UserProfileSetting } from '@/types';
import { handleChange, isValidUrl, settingProfileSchema, validateURLAvatar } from '@/utils';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useSWR from 'swr';

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const SettingProfile = () => {
    const [formData, setFormData] = useState({
        userName: '',
        fullName: '',
        phoneNumber: '',
        userAddress: '',
        sortProfile: '',
        imgURL: ''
    })

    // console.log(formData);

    const { user, isLoading, setIsLoading } = useContext(GlobalContext) || {}

    const { data: listUser, error } = useSWR<UserProfileSetting>(`/api/users/user_id?user_id=${user?.id}`, fetcher)

    const isLoadingForm = !listUser && !error

    useEffect(() => {
        if (listUser) {
            setFormData({
                userName: listUser.userName ?? "",
                fullName: listUser.fullName ?? "",
                phoneNumber: listUser.phoneNumber ?? "",
                userAddress: listUser.userAddress ?? "",
                sortProfile: listUser.sortProfile ?? "",
                imgURL: listUser.imgUrl ?? ""
            })
            reset({
                userName: listUser.userName ?? "",
                fullName: listUser.fullName ?? "",
                phoneNumber: listUser.phoneNumber ?? "",
                userAddress: listUser.userAddress ?? "",
                sortProfile: listUser.sortProfile ?? "",
                imgURL: listUser.imgUrl ?? ""
            });
        }
    }, [listUser])

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<FormUserProfileSetting>({
        resolver: yupResolver(settingProfileSchema),
    })

    const [uploadedImage, setUploadedImage] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            const base64Image = event.target?.result;
            console.log(base64Image);
            if (typeof base64Image === 'string') {
                setUploadedImage(base64Image)
                setValue('imgURL', base64Image)
            }
        };
        acceptedFiles.forEach((file) => {
            fileReader.readAsDataURL(file);
        });
    }, [setValue]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
        },
        onDrop,
    });

    const onSubmit = async () => {
        if (setIsLoading) setIsLoading(true)

        const res = await putProfileUserService({
            id: user?.id,
            userName: formData.userName,
            fullName: formData.fullName,
            phoneNumber: formData.phoneNumber,
            userAddress: formData.userAddress,
            sortProfile: formData.sortProfile,
            imgURL: uploadedImage
        })

        console.log(res);

        if (setIsLoading) setIsLoading(false)
    }

    return (
        <form className="relative p-8 flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
            {isLoadingForm ? (
                <div className="h-screen flex items-center justify-center">
                    <LoadingFullScreen loading={isLoadingForm} />
                </div>
            ) : (
                <>
                    <div className="text-gray-600 text-3xl font-semibold">Hồ sơ</div>
                    <div className="relative flex flex-col w-2/5 gap-3 items-center">
                        <div {...getRootProps()} className="relative w-full pb-[100%] border-2 border-gray-400 p-4 rounded-xl cursor-pointer">
                            <input {...getInputProps()} />
                            {uploadedImage ? (
                                <Image
                                    src={uploadedImage}
                                    alt="Uploaded avatar"
                                    className="object-cover rounded-xl"
                                    fill
                                />
                            ) : isValidUrl(formData.imgURL) ? (
                                <Image
                                    src={validateURLAvatar(formData.imgURL)}
                                    alt="avatar"
                                    className="object-cover rounded-xl"
                                    fill
                                />
                            ) : (
                                <input {...getInputProps()} />
                            )}
                        </div>
                        <div className="flex flex-row text-primary-blue-cus items-center gap-2 whitespace-nowrap">
                            <AiFillCamera size={30} />
                            <span className="text-xl font-semibold">Đăng tải hình ảnh</span>
                        </div>
                        {errors.imgURL && <p className="text-red-500 font-medium h-4">{errors.imgURL.message}</p>}
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
                                name="userName"
                                type="text"
                                id="userName"
                                value={formData.userName ?? ""}
                                onChange={(e) => handleChange(e, setFormData)}
                                register={register}
                                errors={errors}
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
                                name="fullName"
                                type="text"
                                id="fullName"
                                value={formData.fullName ?? ""}
                                onChange={(e) => handleChange(e, setFormData)}
                                register={register}
                                errors={errors}
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
                                name="phoneNumber"
                                type="number"
                                id="phoneNumber"
                                value={formData.phoneNumber ?? 0}
                                onChange={(e) => handleChange(e, setFormData)}
                                register={register}
                                errors={errors}
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
                                name="userAddress"
                                type="text"
                                id="userAddress"
                                value={formData.userAddress ?? ""}
                                onChange={(e) => handleChange(e, setFormData)}
                                register={register}
                                errors={errors}
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
                            <Input
                                colorInput="bg-[#F5F5F5] border-none"
                                name="sortProfile"
                                type="text"
                                id="sortProfile"
                                value={formData.sortProfile ?? ""}
                                onChange={(e) => handleChange(e, setFormData)}
                                register={register}
                                errors={errors}
                                flagInput
                            />
                        </div>
                    </div>
                    <div className="relative flex justify-center">
                        <button className="text-white text-xl font-semibold bg-primary-blue-cus px-12 py-3 rounded-xl">
                            {isLoading ? (
                                <Loading loading={isLoading} />
                            ) : (
                                "Lưu"
                            )}
                        </button>
                    </div>
                </>
            )}
        </form>
    );
};

export default SettingProfile;
