import UserOther from "@/app/components/providers/format/UserCarousel/UserOther";
import { GlobalContext } from "@/contexts";
import { getSuggestPlayer } from "@/services";
import { User } from "@/types";
import { useContext, useEffect, useState } from "react";

const SuggestPlayerStep = () => {
    const [listUser, setListUser] = useState<User[]>([])

    const { user } = useContext(GlobalContext) || {}

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const users = await getSuggestPlayer(user?.id!);
                setListUser(users);
                console.log(users);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUsers();
    }, []);

    const sliceUser = listUser.slice(0, 6)

    return (
        <div className="relative w-full grid grid-cols-3 gap-5 max-h-full">
            {sliceUser.map((item) => (
                <div className="col-span-1 gap-3" key={item.id}>
                    <UserOther
                        id={item.id}
                        imgUrl={item.imgUrl}
                        userName={item.userName}
                        sortProfile={item.sortProfile}
                        rating={item.rating}
                    />
                </div>
            ))}
        </div>
    )
}

export default SuggestPlayerStep