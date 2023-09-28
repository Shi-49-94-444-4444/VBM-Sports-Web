import { LoginFormData } from '@/types';
import { toast } from 'react-toastify';

const login = async (data: LoginFormData) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/users/email_login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            }),
        });

        if (!response.ok) {
            throw new Error('Đăng nhập thất bại');
        }

        const responseData = await response.json();
        // console.log(responseData);

        toast.success('Đăng nhập thành công!');

        return responseData;

    } catch (error) {
        toast.error('Đăng nhập thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};

export default login;
