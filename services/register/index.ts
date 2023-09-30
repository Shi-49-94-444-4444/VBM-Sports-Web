import { RegisterFormData } from '@/types';
import { toast } from 'react-toastify';

const registerService = async (data: RegisterFormData) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                fullName: data.name,
                phoneNum: data.phone,
                email: data.email,
                password: data.password,
                reEnterPass: data.confirmPassword,
                userName: ""
            }),
        });

        if (!response.ok) {
            throw new Error('Đăng ký thất bại');
        }

        const responseData = await response.json();
        // console.log(responseData);

        toast.success('Đăng ký thành công!');

        return responseData;

    } catch (error) {
        toast.error('Đăng ký thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};

export default registerService;
