"use client"

import { FormatUI, RegisterForm } from "@/app/components";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, FieldValues } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormData {
    fullName: string;
    phoneNum: string;
    email: string;
    password: string;
    reEnterPassword: string;
}

const Register = () => {
    const router = useRouter()
    const { setError } = useForm<FieldValues>();

    const onSubmit = async (data: FormData) => {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        };

        try {
            const response = await axios.post(`${process.env.API_BASE_URL}/users/register`, {
                fullName: data.fullName,
                phoneNum: data.phoneNum,
                email: data.email,
                password: data.password,
                reEnterPassword: data.reEnterPassword,
            },
                {
                    headers,
                }
            );

            console.log(response.data)
            toast.success('Đăng ký thành công!');

            return response.data
        } catch (error) {
            setError('apiError', { type: 'manual', message: 'Đăng ký thất bại' });
            toast.error('Đăng ký thất bại. Vui lòng thử lại sau.');
        }
    };

    const footerContent = (
        <div className="
                flex 
                font-medium 
                text-lg
                text-white
                space-x-1
            "
        >
            <span>Đã có tài khoản?</span>
            <span className="underline cursor-pointer">
                <Link href="./login">
                    Đăng nhập ngay
                </Link>
            </span>
        </div>
    )

    return (
        <FormatUI
            src="/images/background_4.png"
            title="Đăng ký"
            body={<RegisterForm />}
            titleButton="Vào trang"
            footer={footerContent}
            onSubmit={onSubmit}
        />
    );
};

export default Register;