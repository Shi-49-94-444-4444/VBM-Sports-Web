export interface Product {
    id: number;
    src?: string;
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