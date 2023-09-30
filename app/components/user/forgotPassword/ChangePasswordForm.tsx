"use client"

import { BiSolidLockAlt } from "react-icons/bi"
import { Input } from "../../providers"
import { useContext, useState } from "react";
import { GlobalContext } from "@/contexts";
import { useRouter } from "next/router";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ChangePasswordFormData, FormData } from "@/types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { changePasswordService } from "@/services/forgotPassword";

const initialFormData = {
    password: "",
    confirmPassword: "",
};

const ChangePasswordForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const { setIsAuthUser, setUser, setIsLoading } = useContext(GlobalContext) || {}
    const router = useRouter()

    const schema = yup.object().shape({
        password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').max(25, 'Mật khẩu nhiều nhất chỉ được 25 ký tự').required('Mật khẩu là trường bắt buộc'),
        confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Mật khẩu xác nhận phải khớp').required('Mật khẩu xác nhận là trường bắt buộc'),
    }).required()

    const { register, handleSubmit, setError, formState: { errors } } = useForm<ChangePasswordFormData>({ resolver: yupResolver(schema), });

    const onSubmit = async (data: FormData) => {
        try {
            if (setIsLoading) setIsLoading(true)

            const email = localStorage.getItem("email")

            const res = await changePasswordService({ email: email!, password: data.password, confirmPassword: data.confirmPassword })

            console.log(res)

            if (res.message === "Update Success") {
                toast.success(res.message, {
                    position: toast.POSITION.TOP_RIGHT,
                })

                if (setIsAuthUser) setIsAuthUser(false)
                if (setUser) setUser(null)
                localStorage.clear()

                router.push("/")
            }
            if (setIsLoading) setIsLoading(false)
        } catch (error) {
            setError('root', { type: 'manual', message: 'Đổi mật khẩu thất bại' });
            toast.error('Đổi mật khẩu thất bại. Vui lòng thử lại sau.');
        }
    };

    return (
        <form className="flex flex-col gap-3 pb-2" onSubmit={handleSubmit(onSubmit)}>
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
    )
}

export default ChangePasswordForm