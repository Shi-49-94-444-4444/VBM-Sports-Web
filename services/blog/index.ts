import AxiosClient from "../AxiosInstance"

export const createBlogService = async ({ description, title, user_id }: { description: string, title: string, user_id: string }) => {
    try {
        const response = await AxiosClient.post(`/api/blogs/create_by/${user_id}`,{
            title: title,
            description: description
        })

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}