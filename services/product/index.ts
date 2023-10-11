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

        return response;
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