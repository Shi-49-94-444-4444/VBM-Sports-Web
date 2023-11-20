import { Option } from "@/types";
import { AiFillMail } from "react-icons/ai";
import { BiSolidBellRing, BiSolidLockAlt, BiSolidPhoneCall, BiSolidUser } from "react-icons/bi";
import { BsFileEarmarkPost, BsFillFileEarmarkPostFill, BsFillFileEarmarkRuledFill } from "react-icons/bs";
import { FaPollH, FaUserEdit, FaUserFriends, FaUserSlash } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";

export const navlinks = [
    {
        id: "1",
        label: "Vị trí sân",
        linkItems: [
            {
                id: "1",
                label: "Huế",
                href: "/"
            },
            {
                id: "2",
                label: "Huế",
                href: "/"
            },
            {
                id: "3",
                label: "Huế",
                href: "/"
            },
            {
                id: "4",
                label: "Xem tất cả",
                href: "/product/list-badminton"
            }
        ]
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
                href: "/product/list-badminton"
            },
            {
                id: "2",
                label: "Đăng bài",
                href: "/product/post-badminton"
            },
            {
                id: "3",
                label: "Huế",
                href: "/"
            }
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

];

export const settingOptions: Option[] = [
    { id: 1, label: "Hồ sơ", icon: FaUserEdit },
    { id: 2, label: "Bảo mật", icon: IoShieldCheckmark },
    { id: 3, label: "Chặn người dùng", icon: FaUserSlash },
    { id: 4, label: "Thông báo", icon: BiSolidBellRing },
];

export const adminOptions: Option[] = [
    { id: 1, label: "Danh sách người dùng", icon: FaUserFriends },
    { id: 2, label: "Danh sách bài viết", icon: BsFillFileEarmarkPostFill },
    { id: 3, label: "Báo cáo thường niên", icon: BsFillFileEarmarkRuledFill },
    { id: 4, label: "Chính sách", icon: FaPollH },
    { id: 5, label: "Danh sách người dùng đã báo cáo", icon: BsFileEarmarkPost },
];

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

export const filterTitle = [
    {
        id: "1",
        title: "Chọn Tỉnh/Thành phố",
        list: [
            {
                id: "1",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "2",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "3",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "4",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "5",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "6",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "7",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "8",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "9",
                title: "Thanh hóa",
                src: "#",
            },
            {
                id: "10",
                title: "Thanh hóa",
                src: "#",
            }
        ]
    },
    {
        id: "2",
        title: "Số chỗ còn trống",
        list: [
            {
                id: "1",
                title: "10h",
                src: "#",
            },
            {
                id: "2",
                title: "20h",
                src: "#",
            },
            {
                id: "3",
                title: "10h",
                src: "#",
            },
            {
                id: "4",
                title: "10h",
                src: "#",
            },
            {
                id: "5",
                title: "10h",
                src: "#",
            },
            {
                id: "6",
                title: "10h",
                src: "#",
            },
            {
                id: "7",
                title: "10h",
                src: "#",
            },
            {
                id: "8",
                title: "10h",
                src: "#",
            },
            {
                id: "9",
                title: "10h",
                src: "#",
            },
            {
                id: "10",
                title: "10h",
                src: "#",
            }
        ]
    },
    {
        id: "3",
        title: "Thể loại chơi",
        list: [
            {
                id: "1",
                title: "10h",
                src: "#",
            },
            {
                id: "2",
                title: "20h",
                src: "#",
            },
            {
                id: "3",
                title: "10h",
                src: "#",
            },
            {
                id: "4",
                title: "10h",
                src: "#",
            },
            {
                id: "5",
                title: "10h",
                src: "#",
            },
            {
                id: "6",
                title: "10h",
                src: "#",
            },
            {
                id: "7",
                title: "10h",
                src: "#",
            },
            {
                id: "8",
                title: "10h",
                src: "#",
            },
            {
                id: "9",
                title: "10h",
                src: "#",
            },
            {
                id: "10",
                title: "10h",
                src: "#",
            }
        ]
    },
    {
        id: "4",
        title: "Kỹ năng",
        list: [
            {
                id: "1",
                title: "Còn",
                src: "#",
            },
            {
                id: "2",
                title: "Hết",
                src: "#",
            },
        ]
    },
    {
        id: "5",
        title: "Thời gian",
        list: [
            {
                id: "1",
                title: "10000",
                src: "#",
            },
            {
                id: "2",
                title: "10000",
                src: "#",
            },
            {
                id: "3",
                title: "10000",
                src: "#",
            },
            {
                id: "4",
                title: "10000",
                src: "#",
            },
            {
                id: "5",
                title: "10000",
                src: "#",
            },
        ]
    }
]
export const listVoucher = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export const listMethodsPayment = [
    {
        id: "1",
        src: "/images/momo.png",
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
};