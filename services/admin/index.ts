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

export const sendNoticePostService = async ({ post_id, message }: { post_id: string, message: string }) => {
    try {
        const response = await AxiosClient.post(`/api/posts/notice/to/${post_id}`, {
            message: message
        })

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const getSettingService = async () => {
    try {
        const response = await AxiosClient.get(`/api/Settings/get_listSetting`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const sendNoticeUserService = async ({ user_id, message }: { user_id: string, message: string }) => {
    try {
        const response = await AxiosClient.post(`/api/users/notice/to/{user_id}`, {
            message: message
        })

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const updateSettingAdminService = async ({ SettingId, SettingAmount }: { SettingId: string, SettingAmount: number }) => {
    try {
        const response = await AxiosClient.put(`/api/Settings/${SettingId}&${SettingAmount}/set_Setting`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}