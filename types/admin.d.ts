import { UserReportManagement } from '@/app/components';
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
        id: string
        fullName: string
        role: string
        isBanded: boolean
        posts?: {
            id: string
            title: string
            postTime: string
            numOfReport: number
        }[]
    }
}

export interface UserManagePostData {
    id: string
    title: string
    postTime: string
    numOfReport: number
}

export interface UserReportManagement {
    message: string
    data: {
        id: string
        content: string
        title: string | null
        dateReceive: string
        status: string | null
        navigationId: string
        objectNavigation: string
    }[]
}

export interface UserReportManagementData {
    id: string
    content: string
    title: string | null
    dateReceive: string
    status: string | null
    navigationId: string
    objectNavigation: string
}

