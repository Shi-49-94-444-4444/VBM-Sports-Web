import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().
        email('Email không hợp lệ').
        required('Email không được để trống'),
    password: yup.string().
        min(6, 'Mật khẩu phải có ít nhất 6 ký tự').
        max(50, 'Mật khẩu chỉ được nhiều nhất 50 ký tự').
        required('Mật khẩu không được để trống'),
}).required()

export const registerSchema = yup.object().shape({
    name: yup.string().required('Tên không được để trống '),
    email: yup.string().
        email('Email không hợp lệ').
        required('Email không được để trống'),
    phone: yup.string().
        matches(/^[0-9]$/, 'Số điện thoại phải nhập số').
        min(7, 'Số điện thoại có ít nhất 7 số').
        max(15, 'Số điện thoại nhiều nhất 15 số').
        required('Số điện thoại không được để trống'),
    password: yup.string().
        min(6, 'Mật khẩu phải có ít nhất 6 ký tự').
        max(50, 'Mật khẩu nhiều nhất 50 ký tự').
        required('Mật khẩu không được để trống'),
    confirmPassword: yup.string().
        oneOf([yup.ref('password'), ''], 'Mật khẩu xác nhận phải khớp').
        required('Mật khẩu xác nhận không được để trống'),
}).required()

export const changePasswordSchema = yup.object().shape({
    password: yup.string().
        min(6, 'Mật khẩu phải có ít nhất 6 ký tự').
        max(50, 'Mật khẩu nhiều nhất chỉ được 50 ký tự').
        required('Mật khẩu không được để trống'),
    confirmPassword: yup.string().
        oneOf([yup.ref('password'), ''], 'Mật khẩu xác nhận phải khớp').
        required('Mật khẩu xác nhận không được để trống'),
}).required()

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
});