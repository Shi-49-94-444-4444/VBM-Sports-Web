'use client'

import { AiOutlineDown } from "react-icons/ai";

const BannerIntro = () => {
    const handleAdditionalButtonClick = () => {
    };

    return (
        <div className="
                flex 
                flex-col 
                max-w-md 
                text-white 
                gap-3
            "
        >
            <h1 className="
                    text-5xl 
                    font-bold 
                    uppercase
                "
            >
                Bạn muốn tìm sân để chơi cầu lông?
            </h1>
            <p className="opacity-60">
                Nhưng bạn không biết nên chọn sân chơi nào phù hợp với giá tiền trả lời một cuộc phỏng vấn, 
                Tổng thống Nga bày tỏ tự tin, khẳng định có thể hoàn thành mọi kế hoạch đề ra với chiến dịch 
                quân sự tại Ukraine.
            </p>
            <form className="
                    mt-auto 
                    flex 
                    justify-center
                "
            >
                <button
                    className="
                        bg-navbar-cus 
                        text-white 
                        px-4 
                        py-4 
                        rounded-3xl 
                        uppercase 
                        text-lg 
                        font-bold
                        whitespace-nowrap
                    "
                    onClick={handleAdditionalButtonClick}
                    type="button"
                >
                    <div className="
                            flex
                            flex-nowrap
                            flew-row
                            items-start
                        "
                    >
                        <span>
                            Mời chọn khu vực
                        </span>
                        <div className="inline-block ml-2">
                            <div className="
                                    inline-flex 
                                    items-center 
                                    cursor-auto 
                                    align-middle
                                "
                            >
                                <div className="
                                        inline-flex 
                                        items-center 
                                        cursor-auto 
                                        align-middle
                                    "
                                >
                                    <AiOutlineDown size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </form>
        </div>
    )
}

export default BannerIntro