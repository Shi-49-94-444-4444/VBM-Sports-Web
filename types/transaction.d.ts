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
        id: string
        moneyPaied: string
        playingArea: string
        slots: {
            id: string
            playDate: string
        }[]
    }[]
}

export interface ListTransactionData {
    id: string
    moneyPaied: string
    playingArea: string
    slots: {
        id: string
        playDate: string
    }[]
}