export interface ProductFullField {
    id?: string | null
    idType?: string | null
    idUserTo?: string | null
    title?: string | null
    addressSlot?: string | null
    priceSlot?: number | null
    quantitySlot?: number | null
    levelSlot?: number | null
    categorySlot?: string | null  // replace with the actual type if not null
    contentPost?: string | null
    imgUrl?: string | null  // replace with the actual type if not null
    status?: boolean | null
    days?: string | null
    startTime?: string | null
    endTime?: string | null
    savedDate?: string | null
}

export interface ProductDetailContent {
    message: string
    data: {
        id?: string | null
        imageUrls?: string[] | string | null
        hightLightImage?: string
        title?: string | null
        addressSlot?: string | null
        levelSlot?: string | null
        contentPost?: string | null
        fullName?: string | null
        imgUrlUser?: string | null
        sortProfile?: string | null
        categorySlot?: string | null
        totalRate?: number | null
        userId?: string | null
        slotInfos?: {
            startTime: string,
            endTime: string,
            price: number,
            availableSlot: number,
            saveData?: string,
        }[]
    }
}
export interface ProductDetailContentData {
    id?: string | null
    imageUrls?: string[] | string | null
    hightLightImage?: string
    title?: string | null
    addressSlot?: string | null
    levelSlot?: string | null
    contentPost?: string | null
    fullName?: string | null
    imgUrlUser?: string | null
    sortProfile?: string | null
    categorySlot?: string | null
    totalRate?: number | null
    userId?: string | null
    slotInfos?: {
        startTime: string,
        endTime: string,
        price: number,
        availableSlot: number,
        saveData?: string,
    }[]
}

export interface ListProduct {
    message: string
    data: {
        idPost?: string | null
        id?: string | null
        imgUrl?: string | null
        title?: string | null
        addressSlot?: string | null
        levelSlot?: string | null
        days?: string | null
        priceSlot?: number | null
        startTime?: string | null
        endTime?: string | null
        status?: boolean | null
        contentPost?: string | null
        quantitySlot?: number | null
        idUserToNavigation?: {
            id?: string | null
            fullName?: string | null
            imgUrl?: string | null
        } | null
        flagTooltip?: boolean | false
        slots?: [
            {
                id?: string | null
            }
        ] | null
        fullName?: string | null,
        userImgUrl?: string | null,
        price?: number | null,
        highlightUrl?: string | null,
        imgUrlPost?: string[] | string | null
    }[]
}

export interface ListProductData {
    idPost?: string | null
    id?: string | null
    imgUrl?: string | null
    title?: string | null
    addressSlot?: string | null
    levelSlot?: string | null
    days?: string | null
    priceSlot?: number | null
    startTime?: string | null
    endTime?: string | null
    status?: boolean | null
    contentPost?: string | null
    quantitySlot?: number | null
    idUserToNavigation?: {
        id?: string | null
        fullName?: string | null
        imgUrl?: string | null
    } | null
    flagTooltip?: boolean | false
    slots?: [
        {
            id?: string | null
        }
    ] | null
    fullName?: string | null,
    userImgUrl?: string | null,
    price?: number | null,
    highlightUrl?: string | null,
    imgUrlPost?: string[] | string | null
}

export interface ListCity {
    message: string
    data: {
        id: string
        name: string
    }[]
}
export interface ListDistrict {
    message: string
    data: {
        id: string
        name: string
    }[]
}
export interface ListWard {
    message: string
    data: {
        id: string
        name: string
    }[]
}