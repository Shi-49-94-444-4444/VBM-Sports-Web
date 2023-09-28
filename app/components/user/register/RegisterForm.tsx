"use client"

import { Input } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt, BiSolidPhoneCall, BiSolidUser } from 'react-icons/bi';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
    const { register, formState: { errors } } = useForm();

    return (
        <div className="flex flex-col gap-3">
            <Input
                icon={<BiSolidUser size={25} />}
                label="Họ và tên"
                placeholder="Nhập họ và tên"
                type="text"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                register={register}
                id="name"
                name="name"
                errors={errors.name}
            />
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                register={register}
                id="email"
                name="email"
                errors={errors.email}
            />
            <Input
                icon={<BiSolidPhoneCall size={25} />}
                label="Số điện thoại"
                placeholder="Nhập số điện thoại"
                type="number"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                register={register}
                id="phone"
                name="phone"
                errors={errors.phone}
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                register={register}
                id="password"
                name="password"
                errors={errors.password}
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Xác nhận mật khẩu"
                placeholder="Nhập lại mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                register={register}
                id="confirmPassword"
                name="confirmPassword"
                errors={errors.confirmPassword}
            />
        </div>
    );
};

export default RegisterForm;
