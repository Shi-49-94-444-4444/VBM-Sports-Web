import Link from 'next/link';
import { Input } from '../../providers';
import { AiFillMail } from 'react-icons/ai';
import { BiSolidLockAlt } from 'react-icons/bi';

const LoginForm = () => {
    return (
        <div className="flex flex-col gap-5">
            <Input
                icon={<AiFillMail size={25} />}
                label="Email"
                name="mail"
                placeholder="Nhập email của bạn"
                type="email"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="email"
            />
            <Input
                icon={<BiSolidLockAlt size={25} />}
                label="Mật khẩu"
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                colorInput="bg-inherit border-2 border-solid text-white pl-10"
                id="password"
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
        </div>
    );
};

export default LoginForm;
