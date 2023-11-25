export interface TransactionPaymentDetail {
    message: string
    data: {
        id: string
        slotCount: number
        slots:
        {
            id: string
            playDate: string
        }[]
        buyerName: string
        payTime: string
        total: string
        post: {
            id: string,
            title: string,
            titleImage: string
            imageUrls: string[],
            pricePerSlot: string,
            address: string,
            startTime: string,
            endTime: string
        }
    }
}

export interface TransactionPaymentDetailData {
    id?: string
    slotCount?: number
    slots?: {
        id: string
        playDate: string
    }[]
    buyerName?: string
    payTime?: string
    total?: string
    post?: {
        id: string,
        title: string,
        titleImage: string
        imageUrls: string[],
        pricePerSlot: string,
        address: string,
        startTime: string,
        endTime: string
    }
}

export interface ListTransaction {
    message: string
    data: {
        postId: string
        postTitle: string
        startTime: string
        endTime: string
        availableSlot: number
        status: string
        areaName: string
        moneyPaid: number
        transacionId: string
        coverImage: string
        bookedInfos: {
            createSlot: string
            bookedSlot: string
            imageUrls: string[]
        }[]
    }[]
}

export interface ListTransactionData {
    postId: string
    postTitle: string
    startTime: string
    endTime: string
    availableSlot: number
    status: string
    areaName: string
    moneyPaid: number
    transacionId: string
    coverImage: string
    bookedInfos: {
        createSlot: string
        bookedSlot: string
        imageUrls: string[]
    }[]
}