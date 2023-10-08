import { FormData, getOtp, sendMail } from '@/types';
import { toast } from 'react-toastify';
import AxiosClient from '../AxiosInstance';

export const forgotPasswordService = async (data: getOtp) => {
    try {
        const response = await AxiosClient.get(`/api/users/${data.email}/verify_token`);
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const verifyOTPService = async (data: sendMail) => {
    try {
        const response = await AxiosClient.post('/api/users/verify_token', {
            verifyToken: data.otp,
            email: data.email,
        });

        if (!response.data) {
            throw new Error('Xác thực thất bại');
        }

        // console.log(response.data);

        toast.success('Xác thực thành công!');

        return response.data;
    } catch (error) {
        toast.error('Xác thực thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};

export const changePasswordService = async (data: FormData) => {
    try {
        const response = await AxiosClient.put(`/api/users/${data.email}/new_pass`, {
            newPassword: data.password,
            reEnterPassword: data.confirmPassword,
        });

        if (!response.data) {
            throw new Error('Đổi mật khẩu thất bại');
        }

        // console.log(response.data);

        toast.success('Đổi mật khẩu thành công!');

        return response.data;
    } catch (error) {
        toast.error('Đổi mật khẩu thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};