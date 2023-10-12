"use client"

import { Input, Loading } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt, BiSolidPhoneCall, BiSolidUser } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/contexts';
import { useRouter } from 'next/router';
import { RegisterFormData } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import registerService from '@/services/register';
import { toast } from 'react-toastify';
import { handleChange, registerSchema } from '@/utils';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });
    const { setIsLoading, isLoading } = useContext(GlobalContext) || {}
    const [isRegistered, setIsRegistered] = useState(false);
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<RegisterFormData>({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = async (data: RegisterFormData) => {
        if (setIsLoading) setIsLoading(true)

        const res = await registerService(data)

        console.log(res)

        if (res.userId) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            setIsRegistered(true)

            if (setIsLoading) setIsLoading(false)
        } else if (res.errorEmail) {
            setError("email", { message: "Tài khoản đã tồn tại" })
            if (setIsLoading) setIsLoading(false)
        }  else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            if (setIsLoading) setIsLoading(false)
        }
    }

    useEffect(() => {
        if (isRegistered) router.push("/login")
    }, [router, isRegistered])

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
                onChange={(e) => handleChange(e, setFormData)}
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
                {isLoading ? (
                    <Loading
                        loading={isLoading}
                        color="white"
                    />
                ) : (
                    "Đăng ký"
                )}
            </button>
        </form>
    );
};

export default RegisterForm;
