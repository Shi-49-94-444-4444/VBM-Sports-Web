"use client"

import Link from 'next/link';
import { Input, Loading } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { LoginFormData } from '@/types';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '@/contexts';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { yupResolver } from "@hookform/resolvers/yup"
import loginService from '@/services/login';
import { handleChange, loginSchema } from '@/utils';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const {
        isAuthUser,
        setIsAuthUser,
        setUser,
        user,
        setIsLoading,
        isLoading
    } = useContext(GlobalContext) || {}
    const router = useRouter()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        if (setIsLoading) setIsLoading(true)

        const res = await loginService(data)

        console.log("Data", res)

        if (res.id) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            if (setIsAuthUser && setUser) {
                setIsAuthUser(true)
                const user = res
                setUser(user)
            }

            Cookies.set("token", res.token)
            localStorage.setItem("user", JSON.stringify(res))

            if (setIsLoading) setIsLoading(false)
        } else if (res.errorEmail) {
            setError("email", { message: res.errorEmail })
            if (setIsLoading) setIsLoading(false)
        } else if (res.errorPassword) {
            setError("password", { message: res.errorPassword })
            if (setIsLoading) setIsLoading(false)
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
            if (setIsLoading) setIsLoading(false)
        }
    }

    useEffect(() => {
        if (user?.isNewUser) {
            router.push("/register-stepper")
        } else if (isAuthUser) {
            router.push("/");
        }
    }, [router, user?.isNewUser, isAuthUser])

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
                onChange={(e) => handleChange(e, setFormData)}
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
                onChange={(e) => handleChange(e, setFormData)}
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
                <Link href="./forgot-password" className=" ">
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
                {isLoading ? (
                    <Loading
                        loading={isLoading}
                        color="white"
                    />
                ) : (
                    "Vào trang"
                )}
            </button>
        </form>
    );
};

export default LoginForm;
