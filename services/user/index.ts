import { FormData } from "@/types";
import AxiosClient from "../AxiosInstance";

export const getListUserService = async () => {
    try {
        const response = await AxiosClient.get(`/api/users/GetListUser`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const getUserProfile = async (data: FormData) => {
    try {
        const response = await AxiosClient.get(`/api/users/${data.id}/profile`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}