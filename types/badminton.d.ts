export interface FilterItem {
    id: number;
    title: string;
    src: string;
}

export interface FilterCusProps {
    id: number;
    title: string;
    listItem: FilterItem[]
}