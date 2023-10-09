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

export interface FormStep {
    userID?: string;
    grounds?: string[];
    level?: number;
    way?: string[];
}
export interface PlayGround {
    userID: string;
    grounds: string[];
}
export interface PlayLevel {
    userID: string;
    levels: number;
}
export interface PlayWay {
    userID: string;
    ways: string[];
}