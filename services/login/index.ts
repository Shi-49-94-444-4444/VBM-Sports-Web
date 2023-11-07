import { LoginFormData } from '@/types';
import AxiosClient from '../AxiosInstance';

const loginService = async (data: LoginFormData) => {
    try {
        const response = await AxiosClient.post('/api/users/email_login', data);

        return response.data
    } catch (error) {
        console.log(error);
    }
};

export default loginService;
