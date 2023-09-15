export interface Images {
    id: number;
    src: string
}
export interface Product {
    id: number;
    image?: Images[];
    title?: string;
    date?: string;
    price?: number;
    timeOpen?: string;
    timeClose?: string;
    description?: string;
    slot?: number
}

export interface ListProduct {
    listItem: Product[]
}