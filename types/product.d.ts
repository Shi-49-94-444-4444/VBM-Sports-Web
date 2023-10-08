import { User } from "./user";

export interface Images {
    id: string;
    src: string
}
export interface Product {
    id: string;
    imgUrl?: Images[];
    title?: string;
    addressSlot?: string;
    levelSlot?: string;
    days?: string;
    priceSlot?: number;
    startTime?: string;
    endTime?: string;
    contentPost?: string;
    quantitySlot?: number;
    idUserToNavigation?: User
    fullName?: string;
    imgUrlUser?: string;
    sortProfile?: string;
    categorySlot?: string;
}

export interface ListProduct {
    listItem: Product[]
}