export interface linkItem {
    id: number
    label: string,
    href?: string
}

export interface NavlinkItemProps {
    linkItems?: linkItem[] 
}
