"use client"

import Link from 'next/link';
import { Input } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { LoginFormData } from '@/types';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/contexts';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import loginService from '@/services/login';

const initialFormData = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const { isAuthUser, setIsAuthUser, setUser, user, setIsLoading } = useContext(GlobalContext) || {}
    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().email('Email không hợp lệ').required('Email là trường bắt buộc'),
        password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Mật khẩu là trường bắt buộc'),
    });

    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginFormData>({ resolver: yupResolver(schema), });

    const onSubmit = async (data: LoginFormData) => {
        try {
            if (setIsLoading) setIsLoading(true)

            const res = await loginService(data)

            console.log("Data", res)
            
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            if (setIsAuthUser && setUser) {
                setIsAuthUser(true);
                const user = { name: res.userName, token: res.token, id: res.id }
                setUser(user);
            }
            Cookies.set("token", res.token)
            localStorage.setItem("user", JSON.stringify(res))
            if (setIsLoading) setIsLoading(false)
        } catch (error) {
            setError('root', { type: 'manual', message: 'Đăng nhập thất bại' });
            toast.error('Đăng nhập thất bại. Vui lòng thử lại sau.');
        }
    };

    // console.log(isAuthUser, user)
    // console.log(formData)

    useEffect(() => {
        if (isAuthUser) router.push("/");
    }, [isAuthUser, router]);

    return (
        <form className="flex flex-col gap-3 pb-2" onSubmit={handleSubmit(onSubmit)}>
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                name="email"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="email"
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
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="password"
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
            <div className="
                    font-semibold 
                    cursor-pointer 
                    text-right
                    text-white
                "
            >
                <Link href="./forgot_password" className=" ">
                    Quên mật khẩu ?
                </Link>
            </div>
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

export default LoginForm;
