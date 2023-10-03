import { IconType } from "react-icons/lib";

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

export interface ButtonProps {
    title: string;
    style: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    icon?: Icon
    iconLeft?: Icon
}

export interface FormatUIProps {
    src: string;
    title?: string;
    subTitle?: string;
    body: React.ReactElement;
    subBody?: React.ReactElement;
    footer?: React.ReactElement;
}

export interface InputProps {
    id?: string;
    icon?: React.ReactNode;
    label?: string;
    name?: string;
    placeholder?: string;
    value?: string | number;
    type?: string;
    disabled?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: FieldErrors;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    colorInput?: string;
    pattern?: RegExp;
}

export interface FormatHomePageProps {
    title: string;
    link: string;
}

export interface QuickBannerTitle {
    title: string;
    subTitle: string;
}

export interface FilterItem {
    id: string;
    title: string;
    src: string;
}

export interface FilterCusProps {
    id: string;
    title: string;
    listItem: FilterItem[]
}

export interface linkItem {
    id: string;
    label: string;
    href?: string
}

export interface NavlinkItemProps {
    linkItems?: linkItem[]
}

export interface Option {
    id: number;
    label: string;
    icon: IconType
}

export interface FormData {
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

export interface OptionsOverviewProps {
    options: Option[];
    selectedOption: number;
    onOptionSelect: (id: number) => void;
} 