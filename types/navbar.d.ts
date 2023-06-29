export interface linkProps {
    id: number
    label: string,
    href?: string
}

export interface NavlinkItemProps {
    linkItem?: linkProps[] 
}