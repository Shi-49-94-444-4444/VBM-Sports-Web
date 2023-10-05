import { PlayGround } from "@/types";
import AxiosClient from "../AxiosInstance";
import { toast } from "react-toastify";

export const getPlayGroundService = async () => {
    try {
        const response = await AxiosClient.get(`/api/posts/play_ground`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const postPlaygroundService = async (data: PlayGround) => {
    try {
        const response = await AxiosClient.post(`/api/users/${data.userID}/play_area`, {
            listArea: data.grounds
        });

        if (!response.data) {
            throw new Error("Gửi không thành công")
        }

        toast.success('Gửi thành công!');

        return response.data
    } catch (error) {
        toast.error('Gửi không thành công. Vui lòng thử lại sau.');
        console.log(error);
    }
}