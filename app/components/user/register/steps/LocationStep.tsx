import { useState } from 'react';

const LocationStep = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const locations = [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 4',
        'Quận 5',
        'Quận 6',
        'Quận 7',
        'Quận 8',
        'Quận 9',
        'Quận 10',
        'Quận 11',
        'Quận 12',
        'Quận Gò Vấp',
        'Quận Tân Bình',
        'Quận Tân Phú',
        'Quận Bình Thạnh',
        'Quận Phú Nhuận',
        'Quận Thủ Đức',
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
                {locations.map((location, index) => (
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
    );
};

export default LocationStep;
