import { UserCarousel } from "../../providers"

const UserOtherExtra = () => {
    return (
        <div className="relative py-10">
            <div className="flex flex-col mb-10">
                <div className="
                        flex 
                        flex-row 
                        justify-between 
                        items-center
                        transition-all
                        duration-500
                    "
                >
                    <div className="
                            w-1/3 
                            h-1 
                            bg-primary-blue-cus
                            hidden
                            lg:block
                        "
                    />
                    <div className="
                            text-gray-600 
                            font-semibold
                            text-3xl 
                            text-center
                            transition-all
                            duration-500
                        "
                    >
                        Những người chơi khác
                    </div>
                    <div className="
                            w-1/3 
                            h-1 
                            bg-primary-blue-cus
                            hidden
                            lg:block
                        "
                    />
                </div>
            </div>
            <UserCarousel />
        </div>
    )
}

export default UserOtherExtra