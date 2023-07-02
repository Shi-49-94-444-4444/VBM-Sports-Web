export interface FormatHomePageProps {
    title: string;
}

export interface QuickBannerTitle {
    title: string;
    subTitle: string;
}
export interface PostNewItem {
    id: number;
    src: string;
    date: string;
    title: string;
}

export interface PostNewContent {
    listItem: PostNewItem[]
}

export interface QuickListItem {
    id: number;
    src: string;
    title: string;
    price: number;
    timeOpen: string;
    timeClose: string;
    description: string;
}

export interface QuickListContent {
    listItem: QuickListItem[]
}
