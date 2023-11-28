import { CheckSlotFormData, BuySlotFormData } from "@/types"
import AxiosClient from "../AxiosInstance"

export const bookingService = async (data: CheckSlotFormData) => {
    // //console.log(data)

    try {

        const response = await AxiosClient.post(`/api/slots/booking`, {
            userId: Number(data.userId),
            postId: Number(data.postId),
            slotsInfo: data.slotsInfo,
            isVnpay: data.isVnpay
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

export const deleteTransactionService = async ({ tran_id }: { tran_id: string }) => {
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

export const transactionStatusService = async ({ tran_id, status_info }: { tran_id: string, status_info: string }) => {
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

export const getTransactionDetailService = async (id: string) => {
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

export const getListTransactionService = async (id: string) => {
    try {
        const response = await AxiosClient.get(`/api/posts/user/${id}/joined`)

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}

export const reportTransactionService = async ({ tran_id, reportContent, reportTitle }: { tran_id: string, reportContent: string, reportTitle: string }) => {
    try {
        const response = await AxiosClient.post(`/api/reports/from_tran/${tran_id}`, {
            reportContent: reportContent,
            reportTitle: reportTitle
        })

        return response.data
    } catch (error: any) {
        //console.log(error)

        if (error && error.response) {
            return error.response.data
        }
    }
}