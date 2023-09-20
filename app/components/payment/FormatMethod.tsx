import Image from "next/image"

interface FormatMethodProps {
    id: number;
    src: string;
    title: string;
    number: number;
    isChecked: boolean;
    onChange: (isChecked: number) => void;
}

const FormatMethod: React.FC<FormatMethodProps> = ({
    id,
    src,
    title,
    number,
    isChecked,
    onChange
}) => {
    return (
        <div className="flex flex-col" key={id}>
            <div className="flex flex-row items-center gap-5 sm:w-96 w-full transition-all duration-500">
                <div className="relative">
                    <Image
                        src={src}
                        alt="payment"
                        height={60}
                        width={60}
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="text-xl text-gray-600 font-semibold">
                        {title}
                    </div>
                    <div className="text-xl text-gray-500 font-normal">
                        *0{number}
                    </div>
                </div>
                <input
                    type="radio"
                    className="
                        ml-auto
                        border-2
                        border-black
                        border-opacity-10
                        appearance-none 
                        h-5 
                        w-5 
                        checked:text-pink-400 
                        focus:ring-0 
                        cursor-pointer
                    "
                    checked={isChecked}
                    onChange={() => onChange(id)}
                />
            </div>
        </div>
    )
}

export default FormatMethod