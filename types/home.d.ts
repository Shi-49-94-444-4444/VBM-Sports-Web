export interface FormatHomePageProps {
    title: string;
    link: string;
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