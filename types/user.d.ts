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
    src?: string;
    name?: string;
    description?: string;
    skillLevel?: number;
    rating?: number;
    friendly?: number;
    trusted?: number;
    helpful?: number;
    comments?: Comment[]
}

export interface listUser {
    listItems: User[]
}