
import { UserOther } from "@/components/providers"
import { listUser } from "@/utils"

const SuggestPlayerStep = () => {
    const sliceUser = listUser.slice(0, 6)

    return (
        <div className="relative w-full grid grid-cols-3 gap-5 h-full">
            {sliceUser.map((item) => (
                <div className="col-span-1 gap-3" key={item.id}>
                    <UserOther
                        id={item.id}
                        src={item.src}
                        name={item.name}
                        description={item.description}
                        rating={item.rating}
                    />
                </div>
            ))}
        </div>
    )
}

export default SuggestPlayerStep