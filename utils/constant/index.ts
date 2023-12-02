import { Option } from "@/types";
import { AiFillMail } from "react-icons/ai";
import { BiSolidBellRing, BiSolidLockAlt, BiSolidPhoneCall, BiSolidUser } from "react-icons/bi";
import { BsFileEarmarkPost, BsFillFileEarmarkPostFill, BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { FaPollH, FaUserEdit, FaUserFriends, FaUserSlash } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

export const navLinks = [
    {
        id: "1",
        label: "Nhắn tin",
        href: "/user/chat-room"
    },
    {
        id: "2",
        label: "Ví tiền",
        href: "/user/wallet"
    },
    {
        id: "3",
        label: "Xem thêm",
        linkItems: [
            {
                id: "1",
                label: "Danh sách sân",
                href: "/product/list-product"
            },
            {
                id: "2",
                label: "Đăng bài",
                href: "/product/post-product"
            },
            {
                id: "3",
                label: "Quản lý bài đăng",
                href: "/product/management-product"
            },
            {
                id: "4",
                label: "Quản lý đơn đặt",
                href: "/transaction/list-transaction"
            },
        ]
    }
]

export const navLinksAdmin = [
    {
        id: "1",
        label: "Quản lý người dùng",
        href: "/admin/user-management"
    },
    {
        id: "2",
        label: "Xem thêm",
        linkItems: [
            {
                id: "1",
                label: "Danh sách sân",
                href: "/product/list-product"
            },
            {
                id: "2",
                label: "Quản lý bài viết",
                href: "/admin/post-management"
            },
            {
                id: "3",
                label: "Quản lý báo cáo",
                href: "/admin/user-report-management"
            },
            {
                id: "4",
                label: "Quản lý doanh thu",
                href: "/product/report-management"
            },
        ]
    }
]

export const loginInputs = [
    {
        id: "email",
        icon: AiFillMail,
        label: "Email",
        placeholder: "Nhập email của bạn",
        type: "email",
        name: "email"
    },
    {
        id: "password",
        icon: BiSolidLockAlt,
        label: "Mật khẩu",
        placeholder: "Nhập mật khẩu của bạn",
        type: "password",
        name: "password"
    }
];

export const registerInputs = [
    {
        id: "name",
        icon: BiSolidUser,
        label: "Họ và tên",
        placeholder: "Nhập họ và tên",
        type: "text",
        name: "name"
    },
    {
        id: "email",
        icon: AiFillMail,
        label: "Email",
        placeholder: "Nhập email của bạn",
        type: "email",
        name: "email"
    },
    {
        id: "phone",
        icon: BiSolidPhoneCall,
        label: "Số điện thoại",
        placeholder: "Nhập số điện thoại",
        type: "number",
        name: "phone",
        maxLength: 15
    },
    {
        id: "password",
        icon: BiSolidLockAlt,
        label: "Mật khẩu",
        placeholder: "Nhập mật khẩu của bạn",
        type: "password",
        name: "password"
    },
    {
        id: "confirmPassword",
        icon: BiSolidLockAlt,
        label: "Xác nhận mật khẩu",
        placeholder: "Nhập lại mật khẩu của bạn",
        type: "password",
        name: "confirmPassword"
    }
];

export const changePasswordInputs = [
    {
        id: "password",
        icon: BiSolidLockAlt,
        label: "Mật khẩu",
        placeholder: "Nhập mật khẩu của bạn",
        type: "password",
        name: "password"
    },
    {
        id: "confirmPassword",
        icon: BiSolidLockAlt,
        label: "Xác nhận mật khẩu",
        placeholder: "Nhập lại mật khẩu của bạn",
        type: "password",
        name: "confirmPassword"
    }
];

export const settingProfileInputs = [
    {
        id: "userName",
        label: "Biệt danh:",
        type: "text",
        name: "userName"
    },
    {
        id: "fullName",
        label: "Họ và tên:",
        type: "text",
        name: "fullName"
    },
    {
        id: "phoneNumber",
        label: "Số điện thoại:",
        type: "number",
        name: "phoneNumber",
        maxLength: 15
    },
    {
        id: "playingArea",
        label: "Quận:",
        type: "text",
        name: "playingArea",
        maxLength: 100
    },
    {
        id: "sortProfile",
        label: "Mô tả:",
        type: "text",
        name: "sortProfile",
        flagInput: true,
        maxLength: 500
    },
]

export const settingOptions: Option[] = [
    { id: 1, label: "Hồ sơ", icon: FaUserEdit },
    { id: 2, label: "Bảo mật", icon: IoShieldCheckmark },
    { id: 3, label: "Chặn người dùng", icon: FaUserSlash },
    { id: 4, label: "Thông báo", icon: BiSolidBellRing },
]

export const adminOptions: Option[] = [
    { id: 1, label: "Quản lý người dùng", icon: FaUserFriends },
    { id: 2, label: "Quản lý tin tức", icon: BsFillFileEarmarkPostFill },
    { id: 3, label: "Quản lý doanh thu", icon: BsFillFileEarmarkRuledFill },
    { id: 4, label: "Chính sách", icon: FaPollH },
    { id: 5, label: "Quản lý báo cáo", icon: BsFileEarmarkPost },
]

export const beforeNavUser = [
    { label: "Đăng nhập", href: "/login" },
    { label: "Đăng ký", href: "/register" },
]

export const settingPasswordInputs = [
    {
        id: "oldPass",
        label: "Nhập mật khẩu hiện tại",
        type: "password",
        name: "oldPass"
    },
    {
        id: "newPass",
        label: "Nhập mật khẩu mới",
        type: "password",
        name: "newPass"
    },
    {
        id: "reEnterPass",
        label: "Nhập lại mật khẩu",
        type: "password",
        name: "reEnterPass"
    },
]

export const listVoucher = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export const listMethodsPayment = [
    {
        id: "1",
        src: "/images/VNPAY.png",
        title: "VNPAY",
        number: 789,
    },
    {
        id: "2",
        src: "/images/walletIcon.png",
        title: "Ví VBM",
        number: 789,
    },
]

export const listBlog = [
    {
        id: "1",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
    {
        id: "2",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
    {
        id: "3",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
    {
        id: "4",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
    {
        id: "5",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
    {
        id: "6",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
    {
        id: "7",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
    {
        id: "8",
        title: "The young Indian player's trip to the US encountered visa problems and many problems",
        date: "5/9/2023",
        description: "It was perhaps the most emotional meltdown on view at the recent TotalEnergies BWF World Championships 2023. Pearly Tan and Thinaah Muralitharan, with a historic women’s doubles medal for Malaysia within their grasp in the quarterfinals, eventually fell in three games, and the hurt was evident in their unrestrained tears.",
        src: "/images/item_1.jpg",
        poster: "Admin"
    },
]

export const customStyles = {
    control: (provided: any) => ({
        ...provided,
        border: 'none',
        paddingLeft: '1rem',
        marginLeft: '0px',
        backgroundColor: '#F5F5F5',
        paddingTop: '5px',
        paddingBottom: '5px',
        boxShadow: 'none !important',
        "*": {
            boxShadow: "none !important",
        },
        '&:hover': {
            border: 'none !important',
            boxShadow: 'none !important',
            outline: 'none !important',
        },
        '&:focus': {
            border: 'none !important',
            boxShadow: 'none !important',
            outline: 'none !important',
        },
    }),
}

export const locationCity = [
    {
        "id": 1,
        "name": "Thành Phố Hồ Chí Minh"
    },
    {
        "id": 2,
        "name": "Thành Phố Thủ Đức"
    }
]

export const locationDistrict_HCM = [
    {
        "id": "1",
        "name": "Quận 1",
    },
    {
        "id": "2",
        "name": "Quận 3",
    },
    {
        "id": "3",
        "name": "Quận 4",
    },
    {
        "id": "4",
        "name": "Quận 5",
    },
    {
        "id": "5",
        "name": "Quận 6",
    },
    {
        "id": "6",
        "name": "Quận 7",
    },
    {
        "id": "7",
        "name": "Quận 8",
    },
    {
        "id": "8",
        "name": "Quận 10",
    },
    {
        "id": "9",
        "name": "Quận 11",
    },
    {
        "id": "10",
        "name": "Quận 12",
    },
    {
        "id": "11",
        "name": "Quận Bình Thạnh",
    },
    {
        "id": "12",
        "name": "Quận Bình Tân",
    },
    {
        "id": "13",
        "name": "Quận Tân Bình",
    },
    {
        "id": "14",
        "name": "Quận Tân Phú",
    },
    {
        "id": "15",
        "name": "Quận Gò Vấp",
    },
    {
        "id": "16",
        "name": "Quận Phú Nhuận",
    },
    {
        "id": "17",
        "name": "Hóc Môn",
    },
    {
        "id": "18",
        "name": "Củ Chi",
    },
    {
        "id": "19",
        "name": "Nhà Bè",
    },
    {
        "id": "20",
        "name": "Bình Chánh",
    },
    {
        "id": "21",
        "name": "Cần Giờ",
    }
]

export const locationDistrict_TD = [
    {
        "id": "22",
        "name": "Quận Thủ Đức",
    },
    {
        "id": "23",
        "name": "Quận 9",
    },
    {
        "id": "24",
        "name": "Quận 2",
    }
]