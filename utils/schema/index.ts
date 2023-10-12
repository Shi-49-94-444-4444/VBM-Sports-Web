import * as yup from 'yup';

const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

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
        matches(phoneRegExp, 'Số điện thoại phải nhập số').
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
})

export const settingProfileSchema = yup.object().shape({
    userName: yup.string().required('Biệt danh không được để trống '),
    fullName: yup.string().required('Tên không được để trống '),
    phoneNumber: yup.string().
        matches(phoneRegExp, 'Số điện thoại phải nhập số').
        min(7, 'Số điện thoại có ít nhất 7 số').
        max(15, 'Số điện thoại nhiều nhất 15 số').
        required('Số điện thoại không được để trống'),
    userAddress: yup.string().required('Địa chỉ không được để trống '),
    sortProfile: yup.string().required('Mô tả không được để trống '),
    imgURL: yup.lazy((value) =>
        /^data/.test(value)
            ? yup.string()
                .trim()
                .matches(
                    /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*)$/i,
                    'Không phải là URL',
                )
                .required()
            : yup.string().trim().url('Không phải là URL').required('Hình ảnh không được để trống'),
    ),
}).required()