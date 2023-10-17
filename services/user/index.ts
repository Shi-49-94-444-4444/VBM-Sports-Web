import { CommentFormData, ReportUserFormData, UserProfileFormData } from "@/types"
import AxiosClient from "../AxiosInstance"
import { toast } from "react-toastify"

export const getListUserService = async () => {
    try {
        const response = await AxiosClient.get(`/api/users/GetListUser`)

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getUserProfileService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/users/${id}/profile`)

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getUserProfileSettingService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/users/user_id?user_id=${id}`)

        return response.data
    } catch (error) {
        console.log(error)
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

        if (!response.data) {
            throw new Error('Lưu thất bại')
        }

        toast.success('Lưu thành công!')

        return response.data
    } catch (error) {
        toast.error('Lưu thất bại. Vui lòng thử lại sau.')
        console.log(error)
    }
}

export const postCommentService = async (data: CommentFormData) => {
    try {
        const response = await AxiosClient.post(`/api/users/${data.fromUserID}/comments/${data.toUserID}`, {
            content: data.content
        })

        if (!response.data) {
            throw new Error('Bình luận thất bại')
        }

        toast.success('Bình luận thành công!')

        return response.data
    } catch (error) {
        toast.error('Bình luận thất bại. Vui lòng thử lại sau.')
        console.log(error)
    }
}

export const getCommentService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/users/${id}/comments`)

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postReportUser = async (data: ReportUserFormData) => {
    try {
        const response = await AxiosClient.post(`/api/users/report/${data.fromUserID}?userreport_id=${data.toUserID}`, {
            content: data.content
        })

        if (!response.data) {
            throw new Error('Tố cáo thất bại')
        }

        toast.success('Tố cáo thành công!')

        return response.data
    } catch (error) {
        toast.error('Tố cáo thất bại. Vui lòng thử lại sau.')
        console.log(error)
    }
} 