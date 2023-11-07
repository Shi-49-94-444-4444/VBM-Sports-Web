import { CreateBadmintonForm, checkSlotFormData } from "@/types";
import AxiosClient from "../AxiosInstance";

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

        return response.data;
    } catch (error) {
        console.log(error)
    }
}

export const checkSlotService = async (data: checkSlotFormData) => {
    try {
        const response = await AxiosClient.post(`/api/slots/available`, {
            userId: data.userId,
            numSlot: data.numberSlot,
            postId: data.postId,
            dateRegis: data.dateRegis
        })

        return response.data
    } catch (error) {
        console.log(error)
    }
}