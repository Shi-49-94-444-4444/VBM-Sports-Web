import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginSchema = yup.object().shape({
    email: yup.string().
        email("Email không hợp lệ").
        required("Email không được để trống"),
    password: yup.string().
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu chỉ được nhiều nhất 50 ký tự").
        required("Mật khẩu không được để trống"),
}).required()

export const registerSchema = yup.object().shape({
    name: yup.string().
        min(4, "Tên tối thiểu 4 kí tự").
        max(50, "Tên nhiều nhất chỉ được 50 kí tự").
        required("Tên không được để trống "),
    email: yup.string().
        email("Email không hợp lệ").
        max(50, "Mail nhiều nhất chỉ được 50 kí tự").
        required("Email không được để trống"),
    phone: yup.string().
        matches(phoneRegExp, "Số điện thoại phải nhập số").
        min(7, "Số điện thoại có ít nhất 7 số").
        max(15, "Số điện thoại nhiều nhất 15 số").
        required("Số điện thoại không được để trống"),
    password: yup.string().
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu nhiều nhất 50 ký tự").
        required("Mật khẩu không được để trống"),
    confirmPassword: yup.string().
        oneOf([yup.ref("password"), ""], "Mật khẩu xác nhận phải khớp").
        required("Mật khẩu xác nhận không được để trống"),
}).required()

export const changePasswordSchema = yup.object().shape({
    password: yup.string().
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu nhiều nhất chỉ được 50 ký tự").
        required("Mật khẩu không được để trống"),
    confirmPassword: yup.string().
        oneOf([yup.ref("password"), ""], "Mật khẩu xác nhận phải khớp").
        required("Mật khẩu xác nhận không được để trống"),
}).required()

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().
        email("Email không hợp lệ").
        required("Email không được để trống"),
})

export const settingProfileSchema = yup.object().shape({
    userName: yup.string().
        min(4, "Tối thiểu 4 kí tự").
        max(50, "Nhiều nhất 50 kí tự").
        required("Biệt danh không được để trống"),
    fullName: yup.string().
        min(4, "Tối thiểu 4 kí tự").
        max(50, "Nhiều nhất 50 kí tự").
        required("Tên không được để trống"),
    phoneNumber: yup.string().
        matches(phoneRegExp, "Số điện thoại phải nhập số").
        min(7, "Số điện thoại có ít nhất 7 số").
        max(15, "Số điện thoại nhiều nhất 15 số").
        required("Số điện thoại không được để trống"),
    userAddress: yup.string().
        min(10, "Tối thiểu 10 kí tự").
        max(100, "Nhiều nhất 100 kí tự").
        required("Địa chỉ không được để trống "),
    sortProfile: yup.string().
        min(10, "Tối thiểu 10 kí tự").
        max(500, "Nhiều nhất 500 kí tự").
        required("Mô tả không được để trống "),
    imgURL: yup.lazy((value) =>
        /^data/.test(value)
            ? yup.string()
                .trim()
                .matches(
                    /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&",()*+;=\-._~:@/?%\s]*)$/i,
                    "Không phải là URL",
                )
                .required()
            : yup.string().trim().
                url("Không phải là URL").
                required("Hình ảnh không được để trống"),
    ),
}).required()

export const commentSchema = yup.object().shape({
    comment: yup.string().
        min(10, "Tối thiểu 10 kí tự").
        max(500, "Nhiều nhất 500 kí tự").
        required("Không được để trống"),
})

export const postNewInputSchema = yup.object().shape({
    title: yup.string().
        min(10, "Tối thiểu 10 kí tự").
        max(50, "Nhiều nhất 50 kí tự").
        required("Không được để trống"),
    address: yup.string().
        min(4, "Tói thiểu 4 ký tự").
        max(50, "Nhiều nhất 50 ký tự").
        required("Không được để trống"),
    price: yup.string().
        min(5, "Tối thiểu phải x0.000VND").
        max(8, "Nhiều nhất chỉ được x0.000.000VND").
        required("Không được để trống"),
    availableSlot: yup.string().
        matches(/^[0-8]{1}$/, "Chỉ được một số").
        required("Không được để trống"),
    description: yup.string().
        min(10, "Tói thiểu 10 ký tự").
        max(300, "Nhiều nhất 50 ký tự").
        required("Không được để trống"),
})