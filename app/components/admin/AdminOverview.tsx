import { OptionsOverviewProps } from "@/types"

const AdminOverview: React.FC<OptionsOverviewProps> = ({
    options,
    onOptionSelect,
    selectedOption
}) => {
    return (
        <div className="flex flex-col gap-10 border border-black border-opacity-10 rounded-r-xl bg-white px-6 py-10 h-full">
            <div className="relative flex justify-between items-center">
                <div className="flex flex-col gap-1">
                    <div className="text-gray-600 font-semibold text-xl">
                        UserName
                    </div>
                    <div className="text-gray-500 font-medium text-lg">
                        UserId
                    </div>
                </div>
                <div className="text-lg font-semibold italic text-gray-500">
                    UserRole
                </div>
            </div>
            <div className="border-b border-black border-opacity-10" />
            {options.map((option) => (
                <button className={`
                        relative 
                        flex 
                        flex-row 
                        items-center 
                        space-x-2 
                        cursor-pointer 
                        hover:text-primary-blue-cus 
                        text-gray-600
                        ${selectedOption === option.id ? 'text-primary-blue-cus font-semibold' : ''}
                    `}
                    key={option.id}
                    onClick={() => onOptionSelect(option.id)}
                >
                    <div className="flex-shrink-0">
                        <option.icon size={24} />
                    </div>
                    <p className="text-lg font-medium text-left">
                        {option.label}
                    </p>
                </button>
            ))}
        </div>
    )
}

export default AdminOverview