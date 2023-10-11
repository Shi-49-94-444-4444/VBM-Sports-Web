export interface FormatDateProps {
    dateString: string;
}

export interface FormatTimeProps {
    timeString: string;
}

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

export interface FormatUIProps {
    src: string;
    title?: string;
    subTitle?: string;
    body: React.ReactElement;
    subBody?: React.ReactElement;
    footer?: React.ReactElement;
}

export interface QuickBannerTitle {
    title: string;
    subTitle: string;
}