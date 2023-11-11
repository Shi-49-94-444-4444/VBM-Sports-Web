import { CreateBadmintonForm, CheckSlotFormData, buySlotFormData } from "@/types"
import AxiosClient from "../AxiosInstance"

export const getListProductService = async () => {
    try {
        const response = await AxiosClient.get(`/api/posts/GetListPost`)

        return response.data;
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const getProductService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/posts/${id}/details`)

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const getProductSuggestService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/posts/${id}/post_suggestion`)

        return response.data;
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const postBadmintonService = async (data: CreateBadmintonForm) => {
    try {
        console.log(data)

        const response = await AxiosClient.post(`/api/posts/create_by/${data.id}`, {
            title: data.title,
            address: data.address,
            day: data.day,
            month: data.month,
            year: data.year,
            startTime: data.startTime,
            endTime: data.endTime,
            price: data.price.toString(),
            availableSlot: data.availableSlot,
            description: data.description,
            highlightUrl: data.highlightUrl,
            imgUrls: data.imgUrls,
            levelSlot: "Sơ cấp",
            categorySlot: "Đánh đơn"
        })

        return response.data;
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}