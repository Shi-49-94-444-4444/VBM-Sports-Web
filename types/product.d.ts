export interface Images {
    id?: string | null;
    src?: string | null;
}

export interface ProductFullField {
    id?: string | null;
    idType?: string | null;
    idUserTo?: string | null;
    title?: string | null;
    addressSlot?: string | null;
    priceSlot?: number | null;
    quantitySlot?: number | null;
    levelSlot?: number | null;
    categorySlot?: string | null; // replace with the actual type if not null
    contentPost?: string | null;
    imgUrl?: Images[] | null; // replace with the actual type if not null
    status?: boolean | null;
    days?: string | null;
    startTime?: string | null;
    endTime?: string | null;
    savedDate?: string | null;
}

export interface ProductDetailContent {
    id?: string;
    imgUrl?: Images[] | null;
    title?: string | null;
    addressSlot?: string | null;
    levelSlot?: string | null;
    days?: string | null;
    priceSlot?: number | null;
    startTime?: string | null;
    endTime?: string | null;
    contentPost?: string | null;
    quantitySlot?: number | null;
    fullName?: string | null;
    imgUrlUser?: string | null;
    sortProfile?: string | null;
    categorySlot?: string | null;
}

export interface ListProduct {
    id?: string | null;
    imgUrl?: Images[] | null;
    title?: string | null;
    addressSlot?: string | null;
    levelSlot?: string | null;
    days?: string | null;
    priceSlot?: number | null;
    startTime?: string | null;
    endTime?: string | null;
    contentPost?: string | null;
    quantitySlot?: number | null;
    idUserToNavigation?: {
        id?: string | null;
        userName?: string | null;
        imgUrl?: string | null;
    } | null
}