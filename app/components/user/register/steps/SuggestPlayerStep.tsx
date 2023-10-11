"use client"

import { LoadingFullScreen, UserOther } from "@/app/components"
import { GlobalContext } from "@/contexts"
import { getSuggestPlayer } from "@/services"
import { UserSuggest } from "@/types"
import { useContext, useEffect, useState } from "react"

const SuggestPlayerStep = () => {
    const [listUser, setListUser] = useState<UserSuggest[]>([])

    const { user, setIsLoading, isLoading } = useContext(GlobalContext) || {}

    useEffect(() => {
        if (setIsLoading) setIsLoading(true)
        const fetchUsers = async () => {
            try {
                const users = await getSuggestPlayer(user?.id ?? "1")
                setListUser(users)
                console.log(users)
                if (setIsLoading) setIsLoading(false)
            } catch (error) {
                console.log(error)
                if (setIsLoading) setIsLoading(false)
            }
        };

        fetchUsers();
    }, [user?.id, setIsLoading]);

    if (!listUser) {
        return <LoadingFullScreen loading={isLoading ?? true} />
    }

    const sliceUser = listUser.slice(0, 6)

    return (
        <div className="relative w-full grid grid-cols-3 gap-5 max-h-full">
            {isLoading ? (
                <LoadingFullScreen loading={isLoading} />
            ) : (
                <>
                    {sliceUser.map((item) => (
                        <div className="col-span-1 gap-3" key={item.userId}>
                            <UserOther
                                id={item.userId}
                                imgUrl={item.userImgUrl}
                                userName={item.userName}
                                sortProfile={item.sortDescript}
                                rating={4}
                            />
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}

export default SuggestPlayerStep