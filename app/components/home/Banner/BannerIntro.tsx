"use client"

import { GlobalContext } from "@/contexts"
import { useUnauthorizeModal } from "@/hooks"
import { postSuggestionAIService } from "@/services"
// import { GlobalContext } from "@/contexts"
// import { locationCity, locationDistrict_HCM, locationDistrict_TD } from "@/utils"
import { useRouter } from "next/navigation"
import { useContext } from "react"
// import { useContext, useState } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { toast } from "react-toastify"

const BannerIntro = () => {
    // const { setSaveDistrict } = useContext(GlobalContext) || {}
    // const [showToggleCity, setShowToggleCity] = useState(false)
    // const [city, setCity] = useState<number | null>(null)
    // const [showToggleDistrict, setShowToggleDistrict] = useState(false)

    const { user } = useContext(GlobalContext) || {}
    const unauthorizeModal = useUnauthorizeModal()

    const handleClick = async() => {
        if (!user) {
            return unauthorizeModal.onOpen()
        }

        if (user && user.id) {
            const res = await postSuggestionAIService(user.id)

            router.push(`/product/detail-product/${res.data.postId.result}`)
        }
    }

    const router = useRouter()

    // const handleAdditionalButtonClick = () => {
    //     setShowToggleCity(!showToggleCity)
    // }

    // const locationDistrict = city && city === 1 ? locationDistrict_HCM : locationDistrict_TD

    return (
        <div className="lg:col-span-2 pb-5">
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
                    VBM là trang mạng xã hội về cầu lông dành cho những người đam mê thể thao nói chung và cầu lông nói riêng. Tại đây các bạn sẽ được gặp gỡ những người chơi thân thiện và hòa đồng. Hãy cùng chúng tôi phát triển một cộng đồng cầu lông và phát triển sức khỏe nhé.
                </p>
                {/* <div className="
                        relative
                        lg:flex 
                        mt-5
                        hidden
                    "
                    onMouseLeave={() => {
                        setShowToggleCity(false);
                        setShowToggleDistrict(false);
                    }}
                >
                    <button
                        className={`
                            hover:text-white
                            hover:bg-primary-blue-cus
                            px-8 
                            py-4 
                            rounded-lg
                            font-bold
                            whitespace-nowrap
                            cursor-pointer
                            flex
                            items-center
                            ${showToggleCity ? "bg-primary-blue-cus text-white" : "bg-white text-primary-blue-cus"}
                        `}
                        onClick={handleAdditionalButtonClick}
                        type="button"
                        onMouseEnter={() => {
                            setShowToggleCity(true)
                        }}
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
                    {showToggleCity && (
                        <div className="absolute -bottom-28 w-full shadow-md transition-all duration-500">
                            <ul className="bg-white h-full rounded-lg py-2 relative">
                                {locationCity.map((item) => (
                                    <li
                                        className={`font-semibold text-center py-3 cursor-pointer text-black hover:bg-slate-200 hover:text-primary-blue-cus ${city ? "focus:bg-slate-200 focus:text-primary-blue-cus" : ""}`}
                                        key={item.id}
                                        onMouseEnter={() => {
                                            setCity(item.id)
                                            setShowToggleDistrict(true)
                                            setShowToggleCity(true)
                                        }}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {showToggleDistrict && (
                        <div className="absolute -bottom-28 left-56 min-w-[700px] max-w-[600px] shadow-md z-[99999] transition-all duration-500" onMouseEnter={() => { setShowToggleCity(true) }}>
                            <div className={`bg-white min-h-full max-h-96 rounded-lg py-2 relative text-black flex flex-col flex-wrap ${city === 1 ? "w-auto" : "w-1/3"}`}>
                                {locationDistrict.map((item) => (
                                    <button
                                        className="font-semibold text-center py-3 cursor-pointer hover:bg-slate-200 hover:text-primary-blue-cus"
                                        key={item.id}
                                        onClick={() => {
                                            if(setSaveDistrict) setSaveDistrict(item)
                                            router.push("/product/list-product")
                                        }}
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div> */}
                <div className="
                        relative
                        flex 
                        mt-5
                    "
                >
                    <button
                        className={`
                            hover:text-white
                            hover:bg-primary-blue-cus
                            bg-white
                            text-primary-blue-cus
                            px-12 
                            py-4 
                            rounded-lg
                            font-bold
                            whitespace-nowrap
                            cursor-pointer
                            flex
                            items-center
                        `}
                        onClick={handleClick}
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
                                Tìm sân nhanh
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BannerIntro