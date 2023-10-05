"use client"

import { GlobalContext } from '@/contexts';
import { getPlayGroundService } from '@/services/step';
import { useContext, useEffect, useState } from 'react';

const LocationStep = () => {
    const [selectedItem, setSelectedItem] = useState<number[]>([]);
    const [locations, setLocations] = useState<string[]>([]);
    const { setUser, user } = useContext(GlobalContext) || {}

    useEffect(() => {
        getPlayGroundService()
            .then(locations => {
                setLocations(locations)
                // console.log(locations)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    useEffect(() => {
        if (user?.playingArea && user.playingArea.length > 0) {
            const initialSelectedItem = locations
                .map((location, index) => (user?.playingArea?.includes(location) ? index : -1))
                .filter(index => index !== -1);
            setSelectedItem(initialSelectedItem);
        }
    }, [user, locations]);

    useEffect(() => {
        const selectedGrounds = selectedItem.map(index => locations[index]);

        if (setUser) {
            setUser({ playingArea: selectedGrounds })
        }
    }, [selectedItem, locations, setUser]);

    const handleItemClick = (index: number) => {
        const isSelected = selectedItem.includes(index)

        if (isSelected) {
            setSelectedItem(selectedItem.filter(item => item !== index));
        } else {
            setSelectedItem([...selectedItem, index]);
        }
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
                            ${selectedItem.includes(index) ? 'text-primary-blue-cus' : ''}
                            flex
                            justify-between
                            items-center
                        `}
                        onClick={() => handleItemClick(index)}
                    >
                        <div>
                            {location}
                        </div>
                        <div className='text-3xl'>
                            &times;
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationStep;
