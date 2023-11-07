import { RegisterFormData } from '@/types';
import { toast } from 'react-toastify';
import AxiosClient from '../AxiosInstance';

const registerService = async (data: RegisterFormData) => {
    try {
        const response = await AxiosClient.post('/api/users/register', {
            fullName: data.name,
            phoneNum: data.phone,
            email: data.email,
            password: data.password,
            reEnterPass: data.confirmPassword,
            userName: data.name.trim(),
        });

        // if (!response.data) {
        //     throw new Error('Đăng ký thất bại');
        // }

        // toast.success('Đăng ký thành công!');

        return response.data;

    } catch (error) {
        // toast.error('Đăng ký thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};

export default registerService;
