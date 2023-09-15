import Input from "../providers/form/Input"

const PostNewForm = () => {
    return (
        <div className="relative">
            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Title:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Location:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Time:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Price:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Number of player:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Mode:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Skill level:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5]"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Detail:</label>
                    </div>
                    <div className="col-span-4">
                        <div className="relative flex items-center">
                            <textarea
                                className="
                                    bg-[#F5F5F5]
                                    w-full 
                                    rounded-lg 
                                    outline-none
                                    hover:border-pink-cus-bt  
                                    text-base
                                    py-3    
                                    px-6
                                    transition-all
                                    duration-300
                                "
                                rows={5}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-end-4 py-4">
                        <div className="relative w-full">
                            <button className="
                                    bg-navbar-cus 
                                    text-white 
                                    font-semibold 
                                    text-lg 
                                    px-10 
                                    py-2 
                                    rounded-xl 
                                    justify-self-center
                                "
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewForm