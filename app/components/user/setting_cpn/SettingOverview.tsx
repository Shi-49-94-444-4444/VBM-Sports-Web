import { OptionsOverviewProps } from "@/types";

const SettingOverview: React.FC<OptionsOverviewProps> = ({
    options,
    onOptionSelect,
    selectedOption
}) => {
    return (
        <div className="flex flex-col p-4 gap-5">
            <div className="text-gray-500 text-xl">
                Setting
            </div>
            {options.map((option) => (
                <button
                    key={option.id}
                    className={`flex flex-row space-x-2 font-semibold text-gray-600 items-center cursor-pointer ${selectedOption === option.id ? 'text-primary-blue-cus font-semibold' : ''}`}
                    onClick={() => onOptionSelect(option.id)}
                >
                    <option.icon size={25} />
                    <span className="text-xl">{option.label}</span>
                </button>
            ))}
        </div>
    )
}

export default SettingOverview