"use client"

import { LoadingFullScreen } from '@/app/components/providers';
import { GlobalContext } from '@/contexts';
import { getPlayGroundService } from '@/services/step';
import { useContext, useEffect, useState } from 'react';

const LocationStep = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(null);
    const [locations, setLocations] = useState<string[]>([]);
    const { setUser, user, setIsLoadingPage, isLoadingPage } = useContext(GlobalContext) || {}

    useEffect(() => {
        if (setIsLoadingPage) setIsLoadingPage(true)
        const fetchPlayGround = async () => {
            try {
                const locations = await getPlayGroundService()
                setLocations(locations)
                if (setIsLoadingPage) setIsLoadingPage(false)
            } catch (error) {
                console.log(error)
                if (setIsLoadingPage) setIsLoadingPage(false)
            }
        }

        fetchPlayGround()
    }, [setIsLoadingPage])

    useEffect(() => {
        if (user?.playingArea && user.playingArea.length > 0 && selectedItem === null) {
            const selectedIndex = locations.findIndex(location => user?.playingArea?.includes(location));
            if (selectedIndex !== -1) {
                setSelectedItem(selectedIndex);
            }
        }
    }, [user, locations, selectedItem]);

    useEffect(() => {
        if (setUser && selectedItem !== null) {
            const selectedGrounds = [locations[selectedItem]]
            setUser(prevUser => ({
                ...prevUser,
                playingArea: selectedGrounds
            }));
        }
    }, [selectedItem, locations, setUser]);

    const handleItemClick = (index: number) => {
        setSelectedItem(prevSelectedItem => prevSelectedItem === index ? null : index);
    };

    if (!locations) {
        return <LoadingFullScreen loading={isLoadingPage ?? true} />
    }

    return (
        <div className="
                relative 
                w-full 
                bg-[#F5F5F5] 
                border 
                border-black 
                border-opacity-10 
                rounded-xl 
                h-80
                overflow-y-auto
            "
        >
            {isLoadingPage ? (
                <LoadingFullScreen loading={isLoadingPage} />
            ) : (
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
            )}
        </div>
    );
};

export default LocationStep;
