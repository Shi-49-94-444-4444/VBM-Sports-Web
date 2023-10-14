import { Option } from "@/types";
import { BiSolidBellRing } from "react-icons/bi";
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
                id:"4",
                label:"Xem tất cả",
                href: "/list-badminton"
            }
        ]
    },
    {
        id: "2",
        label: "Giá tiền",
        href: "/"
    },
    {
        id: "3",
        label: "Xem thêm",
        linkItems: [
            {
                id: "1",
                label: "Danh sách sân",
                href: "/list-badminton"
            },
            {
                id: "2",
                label: "Đăng bài",
                href: "/post-new"
            },
            {
                id: "3",
                label: "Huế",
                href: "/"
            }
        ]
    }
]

export const images = [
    '/images/item_1.jpg',
    '/images/item_2.png',
    '/images/item_1.jpg',
    '/images/item_2.png',
];

export const listItems = [
    {
        id: "1",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn ...Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn ...Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn ...Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn ...Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình.",
        slot: 10
    },
    {
        id: "2",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn lorem ipsum chỉ đơn giản là một đoạn văn",
        slot: 10
    },
    {
        id: "3",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "4",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn lorem ipsum chỉ đơn giản là một đoạn văn",
        slot: 10
    },
    {
        id: "5",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "6",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "7",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "8",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "9",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "10",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "11",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "12",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "13",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "14",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
    {
        id: "15",
        image: [
            {
                id: "1",
                src: "/images/item_1.jpg",
            },
            {
                id: "2",
                src: "/images/item_1.jpg",
            },
            {
                id: "3",
                src: "/images/item_1.jpg",
            },
            {
                id: "4",
                src: "/images/item_1.jpg",
            },

        ],
        title: "Sân Saigon Mall",
        price: 130.000,
        date: "20-07-2021",
        timeOpen: "6h00",
        timeClose: "18h30",
        description: "Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn",
        slot: 10
    },
]

export const postNew = [
    {
        id: "1",
        src: "/images/item_1.jpg",
        date: "20-07-2021",
        title: "Lorem Ipsum",
        description: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of"
    },
    {
        id: "2",
        src: "/images/login.png",
        date: "20-01-2022",
        title: "Lorem Ipsum",
        description: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of"
    },
    {
        id: "3",
        src: "/images/item_1.jpg",
        date: "21-07-2021",
        title: "Lorem Ipsum",
        description: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of"
    },
    {
        id: "4",
        src: "/images/item_1.jpg",
        date: "30-07-2021",
        title: "Lorem Ipsum",
        description: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of"
    },
    {
        id: "5",
        src: "/images/item_1.jpg",
        date: "24-07-2021",
        title: "Lorem Ipsum",
        description: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of"
    },
    {
        id: "6",
        src: "/images/item_1.jpg",
        date: "30-07-2021",
        title: "Lorem Ipsum",
        description: "lLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of"
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

export const listUser = [
    {
        id: "1",
        src: "/images/avatar.jpg",
        name: "Tony Mack",
        description: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn...",
        skillLevel: 4,
        rating: 3,
        friendly: 4,
        trusted: 5,
        helpful: 2,
        comments: [
            {
                id: "1",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "2",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "3",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "4",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            }
        ]
    },
    {
        id: "2",
        src: "/images/avatar.jpg",
        name: "Tony Mack",
        description: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn...",
        skillLevel: 4,
        rating: 3,
        friendly: 4,
        trusted: 5,
        helpful: 2,
        comments: [
            {
                id: "1",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "2",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "3",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "4",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            }
        ]
    },
    {
        id: "3",
        src: "/images/avatar.jpg",
        name: "Tony Mack",
        description: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn...",
        skillLevel: 4,
        rating: 3,
        friendly: 4,
        trusted: 5,
        helpful: 2,
        comments: [
            {
                id: "1",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "2",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "3",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "4",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            }
        ]
    },
    {
        id: "4",
        src: "/images/avatar.jpg",
        name: "Tony Mack",
        description: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn...",
        skillLevel: 4,
        rating: 3,
        friendly: 4,
        trusted: 5,
        helpful: 2,
        comments: [
            {
                id: "1",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "2",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "3",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "4",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            }
        ]
    },
    {
        id: "5",
        src: "/images/avatar.jpg",
        name: "Tony Mack",
        description: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn...",
        skillLevel: 4,
        rating: 3,
        friendly: 4,
        trusted: 5,
        helpful: 2,
        comments: [
            {
                id: "1",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "2",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "3",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            },
            {
                id: "4",
                src: "/images/avatar.jpg",
                name: "Shi",
                rating: 4,
                date: "16/08/2023",
                comment: "Mô tả ngắn: Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc trình bày và dàn trang phục vụ cho in ấn.Lorem Ipsum chỉ đơn giản là một đoạn..."
            }
        ]
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
        src: "/images/momo.png",
        title: "Momo",
        number: 789,
    },
    {
        id: "2",
        src: "/images/vpnpay.png",
        title: "Vn Pay",
        number: 789,
    },
    {
        id: "3",
        src: "/images/viettelpay.png",
        title: "Viettel Pay",
        number: 789,
    },
    {
        id: "4",
        src: "/images/zalopay.png",
        title: "Zalo Pay",
        number: 789,
    },
    {
        id: "5",
        src: "/images/more.png",
        title: "Lựa chọn khác",
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