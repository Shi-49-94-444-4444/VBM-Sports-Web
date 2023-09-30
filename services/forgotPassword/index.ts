import { FormData, getOtp, sendMail } from '@/types';
import { toast } from 'react-toastify';

export const forgotPasswordService = async (data: getOtp) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/users/${data.email}/verify_token`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Gửi không thành công');
        }

        const responseData = await response.json();
        // console.log(responseData);

        toast.success('Gửi thành công!');

        return responseData;

    } catch (error) {
        toast.error('Gửi không thành công. Vui lòng thử lại sau.');
        console.log(error);
    }
};

export const verifyOTPService = async (data: sendMail) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/users/verify_token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "verifyToken": data.otp,
                "email": data.email
            }),
        });

        if (!response.ok) {
            throw new Error('Xác thực thất bại');
        }

        const responseData = await response.json();
        // console.log(responseData);

        toast.success('Xác thực thành công!');

        return responseData;

    } catch (error) {
        toast.error('Xác thực thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
}

export const changePasswordService = async (data: FormData) => {
    try {
        const response = await fetch(`${process.env.API_BASE_URL}/api/users/${data.email}/new_pass`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "newPassword": data.password,
                "reEnterPassword": data.confirmPassword
            }),
        });

        if (!response.ok) {
            throw new Error('Đổi mật khẩu thất bại');
        }

        const responseData = await response.json();
        // console.log(responseData);

        toast.success('Đổi mật khẩu thành công!');

        return responseData;

    } catch (error) {
        toast.error('Đổi mật khẩu thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};