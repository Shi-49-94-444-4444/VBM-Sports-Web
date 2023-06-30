import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

const OtherAccess = () => {
    return (
        <div className="
                flex 
                flex-row 
                px-36 j
                ustify-between 
                cursor-pointer
            "
        >
            <div className="
                    flex 
                    justify-center 
                    items-center
                "
            >
                <AiFillFacebook 
                    size={30} 
                    className="text-blue-600" 
                />
            </div>
            <div className="
                    flex 
                    justify-center 
                    items-center 
                    cursor-pointer
                "
            >
                <FcGoogle size={30} />
            </div>
            <div className="
                    flex justify-center 
                    items-center 
                    cursor-pointer
                "
            >
                <AiOutlineTwitter 
                    size={30} 
                    className="text-blue-400" 
                />
            </div>
        </div>
    )
}

export default OtherAccess