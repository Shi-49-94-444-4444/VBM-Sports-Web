import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

const OtherAccess = () => {
    return (
        <div className="
                flex 
                flex-row 
                space-x-2
                cursor-pointer
                transition-all
                duration-300
            "
        >
            <div className="
                    flex 
                    justify-center 
                    items-center
                    transition-all
                    duration-300
                "
            >
                <AiFillFacebook 
                    size={40} 
                    className="text-blue-600" 
                />
            </div>
            <div className="
                    flex 
                    justify-center 
                    items-center 
                    cursor-pointer
                    transition-all
                    duration-300
                "
            >
                <FcGoogle size={40} />
            </div>
            <div className="
                    flex justify-center 
                    items-center 
                    cursor-pointer
                    transition-all
                    duration-300
                "
            >
                <AiOutlineTwitter 
                    size={40} 
                    className="text-blue-400" 
                />
            </div>
        </div>
    )
}

export default OtherAccess