export interface ManageUser {
    message: string
    data: {
        userId: string | null
        fullName: string | null
        createDate: string | null
        role: string | null
        status: string | null
        lastLogin: string | null
    }[]
}

export interface ManageUserData {
    userId: string | null
    fullName: string | null
    createDate: string | null
    role: string | null
    status: string | null
    lastLogin: string | null
}

export interface UserDetailManage {
    message: string
    data: {
        postId?: string | null
        title?: string | null
    }[]
}

