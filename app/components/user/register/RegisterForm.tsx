"use client"

import { Input } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt, BiSolidPhoneCall, BiSolidUser } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/contexts';
import { useRouter } from 'next/router';
import { RegisterFormData } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import registerService from '@/services/register';
import { toast } from 'react-toastify';
import { getListUserService } from '@/services';

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};

const RegisterForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const { isAuthUser, setIsLoading } = useContext(GlobalContext) || {}
    const [isRegistered, setIsRegistered] = useState(false);
    const router = useRouter()

    const schema = yup.object().shape({
        name: yup.string().required('Tên không được để trống '),
        email: yup.string().
            email('Email không hợp lệ').
            required('Email không được để trống'),
        phone: yup.string().
            matches(/^[0-9]$/, 'Số điện thoại phải nhập số').
            min(7, 'Số điện thoại có ít nhất 7 số').
            max(15, 'Số điện thoại nhiều nhất 15 số').
            required('Số điện thoại không được để trống'),
        password: yup.string().
            min(6, 'Mật khẩu phải có ít nhất 6 ký tự').
            max(50, 'Mật khẩu nhiều nhất 50 ký tự').
            required('Mật khẩu không được để trống'),
        confirmPassword: yup.string().
            oneOf([yup.ref('password'), ''], 'Mật khẩu xác nhận phải khớp').
            required('Mật khẩu xác nhận không được để trống'),
    }).required()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        if (setIsLoading) setIsLoading(true)

        const listUser = await getListUserService()

        if (listUser.email === data.email) {
            setError("email", { message: "Tài khoản đã tồn tại" })
            if (setIsLoading) setIsLoading(false)
            return
        }

        const res = await registerService(data)

        console.log(res)

        if (res.userId) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            setIsRegistered(true)

            router.push("/login")
        } else if (res.ErrorEmail) {
            setError("email", { message: res.ErrorEmail })
        } else if (res.ErrorPassword) {
            setError("confirmPassword", { message: res.ErrorPassword })
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }

        if (setIsLoading) setIsLoading(false)
    };

    useEffect(() => {
        if (isAuthUser) router.push("/");
    }, [isAuthUser, router]);

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <Input
                icon={<BiSolidUser size={25} />}
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                type="text"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        name: e.target.value
                    })
                }
                register={register}
                errors={errors}
            />
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        email: e.target.value
                    })
                }
                register={register}
                errors={errors}
            />
            <Input
                icon={<BiSolidPhoneCall size={25} />}
                label="Số điện thoại"
                placeholder="Nhập số điện thoại"
                type="number"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        phone: e.target.value
                    })
                }
                register={register}
                errors={errors}
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        password: e.target.value
                    })
                }
                register={register}
                errors={errors}
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Xác nhận mật khẩu"
                placeholder="Nhập lại mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) =>
                    setFormData({
                        ...formData,
                        confirmPassword: e.target.value
                    })
                }
                register={register}
                errors={errors}
            />
            <button className="
                    w-full 
                    bg-primary-blue-cus 
                    text-white 
                    font-semibold 
                    text-lg 
                    rounded-xl 
                    py-3
                        
                "
                type="submit"
            >
                Vào trang
            </button>
        </form>
    );
};

export default RegisterForm;
