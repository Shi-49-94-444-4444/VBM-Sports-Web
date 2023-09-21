export interface Images {
    id: string;
    src: string
}
export interface Product {
    id: string;
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