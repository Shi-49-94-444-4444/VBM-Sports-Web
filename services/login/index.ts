import { LoginFormData } from '@/types';
import { toast } from 'react-toastify';
import AxiosClient from '../AxiosInstance';

const loginService = async (data: LoginFormData) => {
    try {
        const response = await AxiosClient.post('/api/users/email_login', data);

        if (!response.data) {
            throw new Error('Đăng nhập thất bại');
        }

        toast.success('Đăng nhập thành công!');

        return response.data;
    } catch (error) {
        toast.error('Đăng nhập thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};

export default loginService;
