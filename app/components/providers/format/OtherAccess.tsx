"use client"

import { auth } from "@/firebase"
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"

const OtherAccess = () => {
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
        prompt: "select_account",
    })

    const siginWithGoogle = () => {
        signInWithRedirect(auth, provider)
    }

    const handleLoginWithGoogle = async () => {
        try {
            await siginWithGoogle()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="
                flex 
                flex-row 
                space-x-2
                cursor-pointer
                transition
                duration-300
            "
        >
            <div className="
                    flex 
                    justify-center 
                    items-center
                    transition
                    duration-300
                "
            >
                <AiFillFacebook
                    size={40}
                    className="text-blue-600"
                />
            </div>
            <button className="
                    flex 
                    justify-center 
                    items-center 
                    transition
                    duration-300
                "
                type="button"
                onClick={handleLoginWithGoogle}
            >
                <FcGoogle size={40} />
            </button>
            <div className="
                    flex justify-center 
                    items-center 
                    cursor-pointer
                    transition
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