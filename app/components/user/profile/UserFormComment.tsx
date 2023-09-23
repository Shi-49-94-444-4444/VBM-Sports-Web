import { Button } from "../../providers"

const UserFormComment = () => {
    return (
        <div className="relative flex flex-col gap-5 py-10">
            <div className="text-xl font-semibold text-gray-600">
                Bình luận
            </div>
            <div className="grid grid-cols-9 md:gap-5 gap-2">
                <div className="sm:col-span-8 col-span-7">
                    <textarea className="
                            text-xl 
                            p-4 
                            rounded-lg 
                            border-2 
                            border-gray-300 
                             
                            focus:ring-0
                            w-full
                            h-full
                        "
                        placeholder="Enter comment..."
                        rows={6}
                    />
                </div>
                <div className="sm:col-span-1 col-span-2">
                    <Button
                        title="POST"
                        style="h-full w-full justify-center rounded-xl"
                        onClick={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserFormComment