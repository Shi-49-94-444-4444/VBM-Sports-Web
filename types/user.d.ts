export interface Comment {
    userId?: string | null;
    userAvatar?: string | null;
    userName?: string | null;
    totalRate?: number | null;
    savedDate?: string | null;
    content?: string | null
}

export interface UserFullField {
    id?: string | null;
    userName?: string | null;
    userPassword?: string | null;
    fullName?: string | null;
    phoneNumber?: string | null;
    userAddress?: string | null;
    isActive?: boolean | null;
    imgUrl?: string | null;
    totalRate?: number | null;
    rate?: number | null;
    userRole?: string | null;
    deviceToken?: string | null;
    email?: string | null;
    playingArea?: string | null;
    playingLevel?: number | null;
    playingWay?: string | null;
    sortProfile?: string | null;
    posts?: any[];
    tokens?: any[];
    transactions?: any[];
    userRatings?: any[];
    wallets?: any[];
    notifications?: any[];
}


export interface User {
    id?: string | null;
    email?: string | null;
    imgUrl?: string | null;
    userName?: string | null;
    userRole?: string | null;
    sortProfile?: string | null;
    skillLevel?: number | null;
    rating?: number | null;
    friendly?: number | null;
    trusted?: number | null;
    helpful?: number | null;
    playingArea?: string[] | null;
    playingLevel?: number | null;
    playingWay?: string[] | null;
    isActive?: boolean | null;
    userAddress?: string | null;
    phoneNumber?: string | null;
    comments?: Comment[] | null
}

export interface UserSuggest {
    postId?: string | null;
    userId?: string | null;
    userName?: string | null;
    sortDescript?: string | null;
    time?: string | null;
    availableSlot?: number | null;
    postImgUrl?: sting | null;
    userImgUrl?: string | null;
    address?: string | null;
}

export interface UserProfile {
    id?: string | null;
    fullName?: string | null;
    totalRate?: number | null,
    imgUrl?: string | null,
    sortProfile?: string | null,
    levelSkill?: number | null,
    friendly?: number | null,
    trusted?: number | null,
    helpful?: number | null
}
export interface ListUser {
    id?: string | null,
    imgUrl?: string | null,
    userName?: string | nul,
    sortProfile?: string | null,
    totalRate?: number | null,
    flagRegister?: boolean | false,
}
