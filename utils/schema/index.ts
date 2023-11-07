import * as yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const loginSchema = yup.object().shape({
    email: yup.string().
        required("Email không được để trống").
        email("Email không hợp lệ"),
    password: yup.string().
        required("Mật khẩu không được để trống").
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu chỉ được nhiều nhất 50 ký tự"),
})

export const registerSchema = yup.object().shape({
    name: yup.string().
        required("Tên không được để trống ").
        min(4, "Tên tối thiểu 4 kí tự").
        max(50, "Tên nhiều nhất chỉ được 50 kí tự"),
    email: yup.string().
        required("Email không được để trống").
        email("Email không hợp lệ").
        max(50, "Mail nhiều nhất chỉ được 50 kí tự"),
    phone: yup.string().
        required("Số điện thoại không được để trống").
        matches(phoneRegExp, "Số điện thoại phải nhập số").
        min(7, "Số điện thoại có ít nhất 7 số").
        max(15, "Số điện thoại nhiều nhất 15 số"),
    password: yup.string().
        required("Mật khẩu không được để trống").
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu nhiều nhất 50 ký tự"),
    confirmPassword: yup.string().
        required("Mật khẩu xác nhận không được để trống").
        oneOf([yup.ref("password"), ""], "Mật khẩu xác nhận phải khớp"),
})

export const changePasswordSchema = yup.object().shape({
    password: yup.string().
        required("Mật khẩu không được để trống").
        min(6, "Mật khẩu phải có ít nhất 6 ký tự").
        max(50, "Mật khẩu nhiều nhất chỉ được 50 ký tự"),
    confirmPassword: yup.string().
        required("Mật khẩu xác nhận không được để trống").
        oneOf([yup.ref("password"), ""], "Mật khẩu xác nhận phải khớp"),
})

export const forgotPasswordSchema = yup.object().shape({
    email: yup.string().
        required("Email không được để trống").
        email("Email không hợp lệ"),
})

export const settingProfileSchema = yup.object().shape({
    userName: yup.string().
        required("Biệt danh không được để trống").
        min(4, "Tối thiểu 4 kí tự").
        max(50, "Nhiều nhất 50 kí tự"),
    fullName: yup.string().
        required("Tên không được để trống").
        min(4, "Tối thiểu 4 kí tự").
        max(50, "Nhiều nhất 50 kí tự"),
    phoneNumber: yup.string().
        required("Số điện thoại không được để trống").
        matches(phoneRegExp, "Số điện thoại phải nhập số").
        min(7, "Số điện thoại có ít nhất 7 số").
        max(15, "Số điện thoại nhiều nhất 15 số"),
    userAddress: yup.string().
        required("Địa chỉ không được để trống ").
        min(10, "Tối thiểu 10 kí tự").
        max(100, "Nhiều nhất 100 kí tự"),
    sortProfile: yup.string().
        required("Mô tả không được để trống ").
        min(10, "Tối thiểu 10 kí tự").
        max(500, "Nhiều nhất 500 kí tự"),
    imgURL: yup.lazy((value) =>
        /^data/.test(value)
            ? yup.string()
                .trim()
                .required("Hình ảnh không được để trống")
                .matches(
                    /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z-]+=[a-z0-9-]+)?)?(;base64)?,([a-z0-9!$&",()*+;=\-._~:@/?%\s]*)$/i,
                    "Không phải là URL",
                )
            : yup.string().trim().
                required("Hình ảnh không được để trống").
                url("Không phải là URL"),
    ),
}).required()

export const commentSchema = yup.object().shape({
    comment: yup.string().
        required("Không được để trống").
        min(10, "Tối thiểu 10 kí tự").
        max(500, "Nhiều nhất 500 kí tự"),
})

export const postNewInputSchema = yup.object().shape({
    title: yup.string().
        required("Không được để trống").
        min(10, "Tối thiểu 10 kí tự").
        max(50, "Nhiều nhất 50 kí tự"),
    address: yup.string().
        required("Không được để trống").
        min(4, "Tói thiểu 4 ký tự").
        max(50, "Nhiều nhất 50 ký tự"),
    price: yup.number().
        required("Không được để trống").
        min(10000, "Tối thiểu phải 10,000 VND").
        max(100000000, "Nhiều nhất chỉ được 100,000,000 VND"),
    availableSlot: yup.string().
        required("Không được để trống").
        matches(/^[0-8]{1}$/, "Chỉ được một số"),
    description: yup.string().
        required("Không được để trống").
        min(50, "Tói thiểu 50 ký tự").
        max(300, "Nhiều nhất 50 ký tự"),
})

export const walletSchema = yup.object().shape({
    money: yup.number().
        required("Không được để trống").
        min(10000, "Tối thiểu là 10,000 VNĐ").
        max(100000000, "Tối đa là 100,000,000 VNĐ"),
})
