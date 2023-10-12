import { FormPutUserProfile } from "@/types";
import AxiosClient from "../AxiosInstance";
import { toast } from "react-toastify";

export const getListUserService = async () => {
    try {
        const response = await AxiosClient.get(`/api/users/GetListUser`);

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getUserProfileService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/users/${id}/profile`)

        return response
    } catch (error) {
        console.log(error)
    }
}

export const putProfileUser = async (data: FormPutUserProfile) => {
    try {
        const response = await AxiosClient.put(`/api/users/${data.id}`, {
            userName: data.userName,
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            userAddress: data.userAddress,
            sortProfile: data.sortProfile,
            imgUrl: data.imgURL
        });

        if (!response.data) {
            throw new Error('Lưu thất bại');
        }

        toast.success('Lưu thành công!');

        return response.data
    } catch (error) {
        toast.error('Lưu thất bại. Vui lòng thử lại sau.');
        console.log(error);
    }
};