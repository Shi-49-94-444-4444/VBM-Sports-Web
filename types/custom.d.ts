export interface BackgroundProps {
    src: string;
    children: React.ReactNode
}

export interface ClientOnlyProps {
    children: React.ReactNode
}

export interface ContainerProps {
    children: React.ReactNode
}

export interface ButtonProps {
    title: string,
    style: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: Icon
}

export interface FormatUIProps {
    src: string,
    title: string,
    subTitle?: React.ReactElement,
    titleButton: string,
    body: React.ReactElement,
    footer?: React.ReactElement,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps {
    id?: string;
    icon?: React.ReactNode;
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    type?: string;
    disabled?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    colorInput?: string
}

export interface FormatHomePageProps {
    title: string;
    link: string;
}

export interface QuickBannerTitle {
    title: string;
    subTitle: string;
}

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

export interface linkItem {
    id: number
    label: string,
    href?: string
}

export interface NavlinkItemProps {
    linkItems?: linkItem[] 
}
