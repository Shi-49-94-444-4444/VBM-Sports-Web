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
    imgUrl?: string | null; // replace with the actual type if not null
    status?: boolean | null;
    days?: string | null;
    startTime?: string | null;
    endTime?: string | null;
    savedDate?: string | null;
}

export interface ProductDetailContent {
    id?: string;
    imgUrl?: string | null;
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
    imgUrl?: string | null;
    title?: string | null;
    addressSlot?: string | null;
    levelSlot?: string | null;
    days?: string | null;
    priceSlot?: number | null;
    startTime?: string | null;
    endTime?: string | null;
    status?: boolean | null;
    contentPost?: string | null;
    quantitySlot?: number | null;
    idUserToNavigation?: {
        id?: string | null;
        fullName?: string | null;
        imgUrl?: string | null;
    } | null
    flagTooltip?: boolean | false;
    slots?: [
        {
            id?: string | null
        }
    ] | null
    fullName?: string | null,
    userImgUrl?: string | null,
    price?: number | null,
    highlightUrl?: string | null,
    imgUrlPost?: string[] | null
}

export interface ListCity {
    id: string;
    name: string;
}
export interface ListDistrict {
    id: string;
    name: string;
}
export interface ListWard {
    id: string;
    name: string;
}