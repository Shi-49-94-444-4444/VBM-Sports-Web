import AxiosClient from "../AxiosInstance"

export const adminBanUserService = async ({ admin_id, user_id }: { admin_id: string, user_id: string }) => {
    try {
        const response = await AxiosClient.put(`/api/users/${admin_id}/banded/${user_id}`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const adminDeletePostService = async ({ admin_id, post_id }: { admin_id: string, post_id: string }) => {
    try {
        const response = await AxiosClient.put(`/api/posts/${admin_id}/delete/${post_id}`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const adminUpRoleService = async ({ admin_id, user_id }: { admin_id: string, user_id: string }) => {
    try {
        const response = await AxiosClient.put(`/api/users/${user_id}/to/3/by/${admin_id}`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const adminDownRoleService = async ({ admin_id, user_id }: { admin_id: string, user_id: string }) => {
    try {
        const response = await AxiosClient.put(`/api/users/${user_id}/to/2/by/${admin_id}`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}