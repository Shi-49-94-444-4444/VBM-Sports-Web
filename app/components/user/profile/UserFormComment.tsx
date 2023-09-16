import { Button } from "../../providers"

const UserFormComment = () => {
    return (
        <div className="relative flex flex-col gap-5 py-10">
            <div className="text-xl font-semibold text-gray-600">
                Comment
            </div>
            <div className="grid grid-cols-9 gap-5">
                <div className="col-span-8">
                    <textarea className="
                            text-xl 
                            p-4 
                            rounded-lg 
                            border-2 
                            border-gray-300 
                            focus:outline-none
                            focus:ring-0
                            w-full
                            h-full
                        "
                        placeholder="Enter comment..."
                        rows={6}
                    />
                </div>
                <div className="col-span-1">
                    <Button
                        title="POST"
                        style="h-full w-full justify-center !rounded-xl"
                        onClick={() => { }}
                    />
                </div>
            </div>
        </div>
    )
}

export default UserFormComment