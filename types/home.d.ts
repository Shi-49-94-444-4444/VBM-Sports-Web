export interface FormatHomePageProps {
    title: string;
    subTitle?: string;
}

export interface QuickListItem {
    src: string;
    title: string;
    price: number;
    timeOpen: string;
    timeClose: string;
    description: string;
}

export interface QuickListItemProps {
    listItems: QuickListItem[];
}

export interface PostNewItemProps {
    src: string;
    description: string;
}

export interface QuickListImageProps {
    src: string;
}

export interface QuickListOverviewProps {
    title: string;
    price: number;
    timeOpen: string;
    timeClose: string;
    description: string;
    isOdd: boolean;
}