import { BiSearch } from "react-icons/bi"

const IsMobileSearch = () => {
    return (
        <div className="
                box-border 
                block 
                transition-all 
                duration-300 
                mb-1
            "
        >
            <div className="
                    box-border 
                    flex-grow-2 
                    transition-all 
                    duration-300
                "
            >
                <form className="
                        relative 
                        flex 
                        flex-row 
                        items-center
                    "
                >
                    <div className="
                            bg-search-cus 
                            rounded-full 
                            cursor-default 
                            py-2 
                            px-3 
                            static 
                            w-full 
                            z-[1000]
                        "
                    >
                        <div className="
                                box-border 
                                relative 
                                transition-all 
                                duration-300
                            "
                        >
                            <div className="
                                    bg-transparent 
                                    border-none 
                                    mb-0 
                                    cursor-pointer
                                "
                            >
                                <div className="
                                        box-border 
                                        flex 
                                        items-center 
                                        transition-all 
                                        duration-300
                                    "
                                >
                                    <div className="
                                            inline-flex 
                                            items-center 
                                            cursor-pointer
                                        "
                                    >
                                        <BiSearch size={24} />
                                    </div>
                                    <input 
                                        className="
                                            w-full 
                                            bg-search-cus 
                                            outline-none 
                                            font-medium 
                                            text-sm 
                                            transition-all 
                                            duration-300 
                                            z-[900] 
                                            pl-2
                                        "
                                        placeholder="Tìm Kiếm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default IsMobileSearch