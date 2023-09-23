import { AiOutlineDown } from "react-icons/ai";

const BannerIntro = () => {
    const handleAdditionalButtonClick = () => {
    };

    return (
        <div className="lg:col-span-2">
            <div className="
                    flex 
                    flex-col 
                    text-white 
                    gap-5
                    justify-center
                    items-center
                    max-w-xl
                    lg:max-w-md 
                    lg:items-baseline
                    transition-all
                    duration-500
                "
            >
                <h1 className="
                        xl:text-5xl
                        xl:leading-tight
                        lg:text-4xl
                        lg:text-left
                        md:text-5xl
                        md:leading-tight
                        text-4xl
                        text-center
                        font-semibold 
                        uppercase
                        transition-all
                        duration-500
                    "
                >
                    Bạn muốn tìm sân để chơi cầu lông?
                </h1>
                <p className="
                        text-gray-300
                        text-lg
                        text-center 
                        lg:text-left
                        transition-all
                        duration-500
                    "
                >
                    Nhưng bạn không biết nên chọn sân chơi nào phù hợp với giá tiền trả lời một cuộc phỏng vấn,
                    Tổng thống Nga bày tỏ tự tin, khẳng định có thể hoàn thành mọi kế hoạch đề ra với chiến dịch
                    quân sự tại Ukraine.
                </p>
                <form className="
                        relative
                        flex 
                        mt-10
                    "
                >
                    <button
                        className="
                            bg-white 
                            text-primary-blue-cus
                            hover:text-white
                            hover:bg-primary-blue-cus
                            px-8 
                            py-4 
                            rounded-lg
                            text-sm 
                            font-bold
                            whitespace-nowrap
                            cursor-pointer
                            flex
                            items-center
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
                                        align-middle
                                    "
                                >
                                    <div className="
                                            inline-flex 
                                            items-center 
                                            align-middle
                                        "
                                    >
                                        <AiOutlineDown size={15} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BannerIntro