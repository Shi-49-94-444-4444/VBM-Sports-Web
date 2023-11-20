import { CheckSlotFormData, BuySlotFormData } from "@/types"
import AxiosClient from "../AxiosInstance"

export const checkSlotService = async (data: CheckSlotFormData) => {
    try {
        const response = await AxiosClient.post(`/api/slots/available`, {
            userId: Number(data.userId),
            postId: Number(data.postId),
            slotsInfo: data.slotsInfo
        })

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const buySlotService = async (data: BuySlotFormData) => {
    //console.log(data)
    
    try {
        const response = await AxiosClient.post(`/api/transactions/buy_slot`, {
            idUser: Number(data.idUser),
            idSlot: data.idSlot,
        })

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const deleteTransactionService = async ({ tran_id }: { tran_id: number }) => {
    try {
        const response = await AxiosClient.delete(`/api/transactions/${tran_id}/discard`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const transactionStatusService = async ({ tran_id, status_info }: { tran_id: number, status_info: number }) => {
    try {
        const response = await AxiosClient.put(`/api/transactions/${tran_id}/status_info/${status_info}`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const getPaymentDetail = async ({ id }: { id: number }) => {
    try {
        const response = await AxiosClient.get(`/api/transactions/${id}/detail`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}