import { FormStep, PlayGround, PlayLevel, PlayWay } from "@/types";
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
        const response = await AxiosClient.post(`/api/users/${data.userID}/playing_area`, {
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

export const postPlayLevelService = async (data: PlayLevel) => {
    try {
        const response = await AxiosClient.post(`/api/users/${data.userID}/playing_level`, {
            point : data.levels
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

export const postPlayWayService = async (data: PlayWay) => {
    try {
        const response = await AxiosClient.post(`/api/users/${data.userID}/playing_way`, {
            playingWays : data.ways
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

export const getSuggestPlayerService = async (data: FormStep) => {
    try {
        const response = await AxiosClient.get(`/api/posts/user/${data.userID}}/suggestion`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
};