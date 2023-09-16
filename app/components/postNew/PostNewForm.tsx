import { Button } from "../providers"
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
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Location:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="location"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Time:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="time"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Price:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="price"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="number"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Number of player:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="player"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="number"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Mode:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="mode"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-5 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-medium">Skill level:</label>
                    </div>
                    <div className="col-span-4">
                        <Input
                            name="skillLevel"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
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
                                    border-none
                                    focus:ring-0
                                    text-base
                                    py-3    
                                    px-6
                                    transition
                                    duration-300
                                "
                                rows={5}
                                typeof="text"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-1"/>
                    <div className="col-span-4 py-4 flex justify-center">
                        <Button
                            title="Confirm"
                            style="px-16 py-3 text-xl"
                            onClick={() => {}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewForm