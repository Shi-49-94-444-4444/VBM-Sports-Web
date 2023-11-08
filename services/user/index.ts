import { CommentFormData, WalletFromData, ReportUserFormData, UserProfileFormData } from "@/types"
import AxiosClient from "../AxiosInstance"

export const getListUserService = async () => {
    try {
        const response = await AxiosClient.get(`/api/users/GetListUser`)

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const getUserProfileService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/users/${id}/profile`)

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const getUserProfileSettingService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/users/user_id?user_id=${id}`)

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const putProfileUserService = async (data: UserProfileFormData) => {
    try {
        const response = await AxiosClient.put(`/api/users/${data.id}`, {
            userName: data.userName,
            fullName: data.fullName,
            phoneNumber: data.phoneNumber,
            userAddress: data.userAddress,
            sortProfile: data.sortProfile,
            imgUrl: data.imgURL
        })

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const postCommentService = async (data: CommentFormData) => {
    try {
        const response = await AxiosClient.post(`/api/users/${data.fromUserID}/comments/${data.toUserID}`, {
            content: data.content
        })

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const getCommentService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/users/${id}/comments`)

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const postReportUserService = async (data: ReportUserFormData) => {
    try {
        const response = await AxiosClient.post(`/api/users/report/${data.fromUserID}?userreport_id=${data.toUserID}`, {
            content: data.content
        })

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const WalletService = async (data: WalletFromData) => {
    try {
        const response = await AxiosClient.put(`/api/wallet/${data.id}`, {
            changes: data.money
        })

        return response.data
    } catch (error: any) {
        console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}