import AxiosClient from "../AxiosInstance";

export const getListProductService = async () => {
    try {
        const response = await AxiosClient.get(`/api/posts/GetListPost`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}