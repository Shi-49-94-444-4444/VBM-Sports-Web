import { useState } from 'react';

const StylePlayStep = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const styles = [
        'Giành quyền tấn công',
        'Khai thác đường chéo sân',
        'Chiến thuật tấn công cuối sân',
        'Chiến thuật buộc đối thủ đánh cầu trái tay',
        'Chiến thuật ép đối phương đổi hướng liên tục',
        'Chiến thuật đánh vào bốn góc sân',
        'Chiến thuật phòng thủ trước tấn công sau',
    ];

    const handleItemClick = (index: number) => {
        setSelectedItem(index);
    };

    return (
        <div className="
                relative 
                w-full 
                bg-[#F5F5F5] 
                border 
                border-black 
                border-opacity-10 
                rounded-xl 
                max-h-80 
                overflow-y-auto
            "
        >
            <ul className="
                    p-8 
                    text-gray-600 
                    text-xl 
                    font-semibold 
                    flex 
                    flex-col 
                    gap-4
                "
            >
                {styles.map((location, index) => (
                    <li
                        key={index}
                        className={`
                            cursor-pointer 
                            ${selectedItem === index ? 'text-primary-blue-cus' : ''}
                        `}
                        onClick={() => handleItemClick(index)}
                    >
                        {location}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StylePlayStep