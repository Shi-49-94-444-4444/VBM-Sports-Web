export interface ProductItem {
    id: number;
    src: string;
    title: string;
    price: number;
    timeOpen: string;
    timeClose: string;
    description: string;
    slot: number;
}

export interface ProductItems {
    listItem: ProductItem[]
}