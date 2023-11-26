"use client"

import { GlobalContext } from '@/contexts'
import { AxiosClient } from '@/services'
import { ListCity, ListDistrict } from '@/types'
import { customStyles } from '@/utils'
import { useContext, useEffect, useMemo, useState } from 'react'
import Select from 'react-select'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

interface Option {
    id: string;
    value: string;
    label: string
}

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const LocationStep = () => {
    const { setUser, user, setIsLoadingPage, isLoadingPage } = useContext(GlobalContext) || {}
    const [selectCity, setSelectedCity] = useState<Option | null>(null)
    const [selectDistrict, setSelectedDistrict] = useState<Option | null>(null)
    const [isUserDataFetched, setIsUserDataFetched] = useState(false)
    const [location, setLocation] = useState({ lat: 10.762622, lng: 106.660172 })

    //Fetch city
    const { data: listCity, error: errorCity } = useSWR<ListCity>(`/api/cities`, fetcher)
    if (errorCity) toast.error(listCity?.message, {
        position: toast.POSITION.TOP_RIGHT
    })
    const optionCity = useMemo(() => {
        return listCity?.data.map(city => ({ id: city.id, value: city.name, label: city.name })) || []
    }, [listCity])

    const handleCityChange = (newValue: Option | null) => {
        if (newValue) {
            setSelectedCity(newValue)
            setSelectedDistrict(null)
        }
    }

    //Fetch district
    const { data: listDistrict, error: errorDistrict } = useSWR<ListDistrict>(selectCity ? `/api/districts/city/${selectCity.id}` : null, fetcher)
    if (errorDistrict) toast.error(listDistrict?.message, {
        position: toast.POSITION.TOP_RIGHT
    })
    const optionDistrict = useMemo(() => {
        return listDistrict?.data.map(district => ({ id: district.id, value: district.name, label: district.name })) || []
    }, [listDistrict])

    // Get state district
    const handleDistrictChange = (newValue: Option | null) => {
        if (newValue) {
            setSelectedDistrict(newValue)
        }
    }

    useEffect(() => {
        selectCity
        // Cập nhật user khi selectCity hoặc selectDistrict thay đổi
        if (selectCity && selectDistrict && setUser) {
            setUser(prevUser => ({
                ...prevUser,
                playingArea: [`${selectCity.value}, ${selectDistrict.value}`],
            }));
        }

    }, [selectCity, selectDistrict, setUser])

    useEffect(() => {
        // Thiết lập giá trị ban đầu cho selectCity dựa trên user.playingArea
        if (!isUserDataFetched && user && user.playingArea && !selectCity) {
            const [city, district] = user.playingArea.toString().split(", ")
            setSelectedCity(optionCity.find(option => option.value.toLocaleLowerCase() === city.toLocaleLowerCase()) || null)
            if (!city && !district) {
                setIsUserDataFetched(true)
            }
        }
    }, [user, optionCity, isUserDataFetched, selectCity])

    useEffect(() => {
        // Thiết lập giá trị ban đầu cho selectDistrict khi selectCity đã được thiết lập
        if (selectCity && user && user.playingArea) {
            const [city, district] = user.playingArea.toString().split(", ")
            setSelectedDistrict(optionDistrict.find(option => option.value.toLocaleLowerCase() === district.toLocaleLowerCase()) || null)
        }
    }, [user, optionDistrict, selectCity])

    useEffect(() => {
        if (selectDistrict) {
            // Gọi Google Maps Geocoding API để lấy tọa độ của quận
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${selectDistrict.value}&key=AIzaSyCk4QXGyAdOoaQT3vw9bkWzmWsbFXy15rc`)
                .then(response => response.json())
                .then(data => {
                    const location = data.results[0].geometry.location;
                    setLocation({ lat: location.lat, lng: location.lng });
                })
                // .catch(error => console.error(error));
        }
    }, [selectDistrict])

    return (
        <div className="
                relative 
                w-full 
                flex
                flex-col
                gap-3 
                h-96
                overflow-y-auto
            "
        >
            <Select
                name="city"
                options={optionCity}
                styles={customStyles}
                instanceId="listCity"
                placeholder="Chọn thành phố"
                onChange={handleCityChange}
                value={selectCity}
            />
            <Select
                name="district"
                options={optionDistrict}
                styles={customStyles}
                instanceId="listDistrict"
                placeholder="Chọn Quận/Huyện"
                onChange={handleDistrictChange}
                isDisabled={!selectCity}
                value={selectDistrict}
            />
            <LoadScript googleMapsApiKey="AIzaSyCk4QXGyAdOoaQT3vw9bkWzmWsbFXy15rc">
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '400px' }}
                    center={location}
                    zoom={10}
                >
                    <Marker position={location} />
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default LocationStep
