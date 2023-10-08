export interface Comment {
    id: string;
    src: string;
    name: string;
    rating: number;
    date: string;
    comment: string
}

export interface User {
    id: string;
    imgUrl?: string;
    userName?: string;
    userRole?: string;
    sortProfile?: string;
    skillLevel?: number;
    rating?: number;
    friendly?: number;
    trusted?: number;
    helpful?: number;
    playingArea?: string[];
    playingLevel?: number;
    playingWay?: string[];
    isActive?: boolean;
    userAddress?: string;
    phoneNumber?: string;
    comments?: Comment[]
}

export interface listUser {
    listItems: User[]
}