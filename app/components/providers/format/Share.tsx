import { BsFacebook } from "react-icons/bs"
import { FaFacebookMessenger, FaTwitterSquare } from "react-icons/fa"
import { VscLinkExternal } from "react-icons/vsc"

const Share = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="text-2xl text-gray-600 font-semibold">
                Chia sẻ về bài viết này:
            </div>
            <div className="flex flex-row items-center space-x-5">
                <BsFacebook size={40} className="text-blue-600 cursor-pointer" />
                <FaFacebookMessenger size={40} className="text-blue-600 cursor-pointer" />
                <FaTwitterSquare size={40} className="text-blue-600 cursor-pointer" />
                <VscLinkExternal size={40} className="cursor-pointer" />
                <div className="flex-grow"></div>
                <div className="
                        text-base 
                        text-gray-500 
                        underline 
                        cursor-pointer 
                        text-right
                    "
                >
                    Báo cáo bài đăng
                </div>
            </div>
        </div>
    )
}

export default Share