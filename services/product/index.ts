import { CreateBadmintonForm } from "@/types";
import AxiosClient from "../AxiosInstance";
import { toast } from "react-toastify";

export const getListProductService = async () => {
    try {
        const response = await AxiosClient.get(`/api/posts/GetListPost`);

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const getProductService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/posts/${id}/details`);

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getProductSuggestService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/posts/${id}/post_suggestion`);

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const postBadmintonService = async (data: CreateBadmintonForm) => {
    try {
        const response = await AxiosClient.post(`/api/posts/create_by/${data.id}`, {
            title: data.title,
            address: data.address,
            day: data.day,
            month: data.month,
            year: data.year,
            startTime: data.startTime,
            endTime: data.endTime,
            price: data.price,
            availableSlot: data.availableSlot,
            description: data.description,
            highlightUrl: data.highlightUrl,
            imgUrls: data.imgURL
        })

        if (!response.data) {
            throw new Error('Đăng bài thất bại');
        }

        toast.success('Đăng bài thành công!');

        return response.data;
    } catch (error) {
        toast.error('Đăng bài thất bại. Vui lòng thử lại sau.');
        console.log(error)
    }
}