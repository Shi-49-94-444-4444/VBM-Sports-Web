export interface FormData {
    id?: string
    email?: string;
    password?: string;
    phone?: string;
    password?: string;
    confirmPassword?: string;
    otp?: string;
}
export interface LoginFormData {
    email: string;
    password: string;
}
export interface RegisterFormData {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}
export interface OTP {
    digit: string;
}
export interface getOtp {
    email: string;
}
export interface sendMail {
    email: string;
    otp: string;
}

export interface ChangePasswordFormData {
    password: string;
    confirmPassword: string;
}

export interface StepFormData {
    userID?: string;
    grounds?: string[];
    level?: number;
    way?: string[];
}
export interface PlayGroundFormData {
    userID: string;
    grounds: string[];
}
export interface PlayLevelFormData {
    userID: string;
    levels: number;
}
export interface PlayWayFormData {
    userID: string;
    ways: string[];
}

export interface UserProfileSettingForm {
    userName: string,
    fullName: string,
    phoneNumber: string,
    userAddress: string,
    sortProfile: string,
    imgURL: string
}
export interface UserProfileFormData {
    id?: string | null,
    userName?: string | null,
    fullName?: string | null,
    phoneNumber?: string | null,
    userAddress?: string | null,
    sortProfile?: string | null,
    imgURL?: string | null
}

export interface CommentFormData {
    fromUserID: string
    content: string
    toUserID: string
}
export interface CommentForm {
    comment: string
}

export interface CreateBadmintonForm {
    id?: string,
    title: string,
    address: string,
    day: string,
    month: string,
    year: string,
    startTime: string,
    endTime: string,
    price: string,
    availableSlot: string,
    description: string,
    highlightUrl: string,
    imgURL: string[],
}
export interface CreateBadmintonFormData {
    title: string,
    city?: string,
    district?: string,
    ward?: string,
    address: string,
    day?: string,
    startTime?: string,
    endTime?: string,
    price: string,
    availableSlot: string,
    description: string,
    imgURL?: string[],
}