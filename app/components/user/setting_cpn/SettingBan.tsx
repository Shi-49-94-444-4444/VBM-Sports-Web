import { Button } from "../../providers"

const SettingBan = () => {

    const listBlock = [
        { id: 1, name: "Nguyễn Văn A" },
        { id: 2, name: "Nguyễn Văn A" },
        { id: 3, name: "Nguyễn Văn A" },
        { id: 4, name: "Nguyễn Văn A" },
        { id: 5, name: "Nguyễn Văn A" },
        { id: 6, name: "Nguyễn Văn A" },
        { id: 7, name: "Nguyễn Văn A" },
        { id: 8, name: "Nguyễn Văn A" },
        { id: 9, name: "Nguyễn Văn A" },
    ]

    return (
        <div className="relative p-8 flex flex-col gap-5">
            <div className="text-gray-600 text-3xl font-semibold">Danh sách người dùng đã chặn</div>
            <div className="border border-black border-opacity-10" />
            <div className="relative bg-[#F5F5F5] border border-black border-opacity-10 rounded-xl">
                <div className="flex flex-col p-6 gap-3">
                    {listBlock.map((items) => (
                        <div className="flex flex-row justify-between items-center" key={items.id}>
                            <div className="text-gray-600 text-xl font-semibold">
                                {items.name}
                            </div>
                            <div className="cursor-pointer text-3xl">&times;</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative flex justify-center">
                <Button
                    title="Lưu"
                    style="text-xl py-2 px-10"
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}

export default SettingBan