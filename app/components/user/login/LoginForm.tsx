"use client"

import Link from 'next/link';
import { Input, Loading } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt } from 'react-icons/bi';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { LoginFormData } from '@/types';
import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '@/contexts';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { yupResolver } from "@hookform/resolvers/yup"
import loginService from '@/services/login';
import { loginInputs, loginSchema } from '@/utils';

const LoginForm = () => {
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

        } else if (res.errorEmail) {
            setError("email", { message: res.errorEmail })
        } else if (res.errorPassword) {
            setError("password", { message: res.errorPassword })
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }

        if (setIsLoading) setIsLoading(false)
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
            {loginInputs.map((input) => (
                <React.Fragment key={input.id}>
                    <Input
                        IconType={input.icon}
                        label={input.label}
                        name={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        colorInput="bg-inherit border-2 border-solid text-white pl-10"
                        id={input.id}
                        register={register}
                        errors={errors}
                    />
                </React.Fragment>
            ))}
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
