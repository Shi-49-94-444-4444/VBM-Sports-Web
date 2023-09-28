"use client"

import Link from 'next/link';
import { Input } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { LoginFormData } from '@/types';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '@/contexts';
import login from '@/services/login';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';


const LoginForm = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm<LoginFormData>();
    const { isAuthUser, setIsAuthUser, setUser, user } = useContext(GlobalContext) || {}
    const router = useRouter()

    const onSubmit = async (data: LoginFormData) => {
        try {
            const res = await login(data)

            localStorage.clear()

            console.log(res)

            if (res.token) {
                toast.success(res.message, {
                    position: toast.POSITION.TOP_RIGHT,
                })
                if (setIsAuthUser) {
                    setIsAuthUser(true);
                    console.log(isAuthUser)
                }
                if (setUser) {
                    const user = { name: res.userName, token: res.token }
                    setUser(user);
                    console.log(user)
                }
                Cookies.set("token", res.token)
                localStorage.setItem("user", JSON.stringify(res))
                if (isAuthUser === true) {
                    router.push("/")
                }
            } else {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                if (setIsAuthUser) {
                    setIsAuthUser(false)
                    console.log(isAuthUser)
                }
            }
        } catch (error) {
            setError('root', { type: 'manual', message: 'Đăng nhập thất bại' });
            toast.error('Đăng nhập thất bại. Vui lòng thử lại sau.');
        }
    };

    console.log(isAuthUser, user)

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                name="email"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="email"
                register={register}
                errors={errors.email}
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="password"
                register={register}
                errors={errors.password}
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
