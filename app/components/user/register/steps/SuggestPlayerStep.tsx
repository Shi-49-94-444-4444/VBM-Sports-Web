"use client"

import { LoadingFullScreen, UserOther } from "@/app/components"
import { GlobalContext } from "@/contexts"
import { AxiosClient } from "@/services"
import { UserSuggest } from "@/types"
import { useContext } from "react"
import useSWR from "swr"

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const SuggestPlayerStep = () => {
    const { user } = useContext(GlobalContext) || {}

    const { data: listUser, error } = useSWR<UserSuggest>(user && user.id ? `/api/posts/user/${user.id}/suggestion` : null, fetcher)

    const isLoading = !listUser && !error

    const sliceUser = listUser && listUser.data.length > 0 ? listUser.data.slice(0, 6) : []

    return (
        <div className="relative w-full grid grid-cols-3 gap-5 max-h-full">
            {isLoading ? (
                <div className="col-span-3 flex justify-center items-center h-full">
                    <LoadingFullScreen loading={isLoading} />
                </div>
            ) : listUser && listUser.data.length === 0 ? (
                <div className="h-96 flex items-center justify-center text-3xl text-primary-blue-cus font-semibold col-span-3">
                    Không có bất kì gọi ý người chơi nào cho bạn cả
                </div>
            ) : (
                <>
                    {sliceUser.map((item) => (
                        <div className="col-span-1 gap-3" key={item.userId}>
                            <UserOther
                                id={item.userId}
                                imgUrl={item.userImgUrl}
                                userName={item.userName}
                                sortProfile={item.sortDescript}
                            />
                        </div>
                    ))}
                </>
            )
            }
        </div >
    )
}

export default SuggestPlayerStep