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
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import loginService from '@/services/login';
import { getListUserService } from '@/services';

const initialFormData = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const {
        isAuthUser,
        setIsAuthUser,
        setUser,
        user,
        setIsLoading,
        isLoading
    } = useContext(GlobalContext) || {}
    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().
            email('Email không hợp lệ').
            required('Email không được để trống'),
        password: yup.string().
            min(6, 'Mật khẩu phải có ít nhất 6 ký tự').
            max(50, 'Mật khẩu chỉ được nhiều nhất 50 ký tự').
            required('Mật khẩu không được để trống'),
    });

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data: LoginFormData) => {
        if (setIsLoading) setIsLoading(true)

        const listUser = await getListUserService()

        if (listUser.email !== data.email) {
            setError("email", { message: "Tài khoản không tồn tại" })
            if (setIsLoading) setIsLoading(false)
            return
        }

        const res = await loginService(data)

        console.log("Data", res)

        if (res.id) {
            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })

            if (setIsAuthUser && setUser) {
                setIsAuthUser(true);
                const user = {
                    id: res.id,
                    name: res.userName,
                    avatar: res.avatar,
                    playingArea: res.playingArea,
                    playingLevel: res.playingLevel,
                    playingWay: res.playingWay,
                    token: res.token,
                    isNewUser: res.isNewUser
                }
                setUser(user);
            }

            Cookies.set("token", res.token)
            localStorage.setItem("user", JSON.stringify(res))
        } else if (res.ErrorEmail) {
            setError("email", { message: res.ErrorEmail })
        } else if (res.ErrorPassword) {
            setError("password", { message: res.ErrorPassword })
        } else {
            toast.error(res.message, {
                position: toast.POSITION.TOP_RIGHT,
            })
        }

        if (setIsLoading) setIsLoading(false)
    };

    // console.log(isAuthUser, user)
    // console.log(formData)

    useEffect(() => {
        if (user?.isNewUser) {
            router.push("/register-stepper")
        } else if (isAuthUser) {
            router.push("/");
        }
    }, [isAuthUser, router, user]);

    return (
        <form className="flex flex-col gap-3 pb-2" onSubmit={handleSubmit(onSubmit)}>
            {/* {errors.root && (
                <p className="text-red-500 font-medium text-xl relative bg-red-300 bg-opacity-20 w-full h-12 flex items-center justify-center">
                    {errors.root.message}
                </p>
            )} */}
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
                    " Vào trang"
                )}
            </button>
        </form>
    );
};

export default LoginForm;
