"use client"

import ThumbGallery from "./ThumbsGallery"
import Select from "react-select"
import { Button, Loading, TimeRangePicker } from "../providers"
import Input from "../providers/form/Input"
import Datepicker from "react-tailwindcss-datepicker"
import { useContext, useState } from "react"
import { addDays, addYears, differenceInDays, differenceInHours, eachDayOfInterval, format, isBefore, isSameDay, setHours, setMinutes, startOfDay } from 'date-fns'
import { vi } from 'date-fns/locale'
import { AxiosClient, postBadmintonService } from "@/services"
import useSWR from "swr"
import { ListCity, ListDistrict, ListWard, Time } from "@/types"
import { customStyles, handleChange } from "@/utils"
import { useForm } from "react-hook-form"
import { GlobalContext } from "@/contexts"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

interface Option {
    id: string;
    value: string;
    label: string
}

const fetcher = (url: string) => AxiosClient.get(url).then(res => res.data)

const PostNewForm = () => {
    const [formGlobal, setFormGlobal] = useState({
        title: "",
        address: "",
        description: ""
    })
    const [uploadImages, setUploadImages] = useState<string[]>([])
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null
    })
    const [selectedDays, setSelectedDays] = useState<Date[]>([])
    const [selectCity, setSelectedCity] = useState<Option | null>(null)
    const [selectDistrict, setSelectedDistrict] = useState<Option | null>(null)
    const [selectWard, setSelectedWard] = useState<Option | null>(null)
    const [selectLevel, setSelectLevel] = useState<Option | null>(null)
    const [selectCategory, setSelectCategory] = useState<Option | null>(null)
    const [showDateField, setShowDateField] = useState(false)
    const [forms, setForms] = useState<JSX.Element[]>([])
    const [slots, setSlots] = useState<{ day: Date; startTime: string; endTime: string; price: number; availableSlot: number; }[]>([])
    const router = useRouter()

    const listLevel = [
        { id: "1", value: "Mới chơi", label: "Mới chơi" },
        { id: "2", value: "Nghiệp dư", label: "Nghiệp dư" },
        { id: "3", value: "Chuyên nghiệp", label: "Chuyên nghiệp" },
    ]

    const listCategory = [
        { id: "1", value: "Đánh đơn", label: "Đánh đơn" },
        { id: "2", value: "Đánh đôi", label: "Đánh đôi" },
        { id: "3", value: "Hỗn hợp", label: "Hỗn hợp" },
    ]

    const { handleSubmit } = useForm()

    const { user, isLoading, setIsLoading } = useContext(GlobalContext) || {}

    //Chọn phạm vi ngày
    const handleDateChange = (newValue: any) => {
        const { startDate, endDate } = newValue;
        if (startDate && endDate) {
            const diffInDays = differenceInDays(new Date(endDate), new Date(startDate));
            if (diffInDays > 7) {
                toast.error('Khoảng cách giữa ngày bắt đầu và ngày kết thúc không được vượt quá 7 ngày', {
                    position: toast.POSITION.TOP_RIGHT
                })
                setDateRange({ startDate: null, endDate: null })
                setShowDateField(false)
                setForms([])
                setSlots([])
                return
            }
        }

        if (startDate == null || endDate == null) {
            setShowDateField(false)
            setForms([])
            setSlots([])
            return
        }

        setDateRange(newValue)
        setSelectedDays([])
        setShowDateField(true)
    }

    //Xử lý time picker
    const handleTimeChange = (time: { startTime: string; endTime: string }, day: Date) => {
        setSlots(prevSlots => prevSlots.map((slot) => {
            if (slot.day === day) {
                return { ...slot, ...time, ...day }
            } else {
                return slot
            }
        }))
    }

    const handleChangeSlot = (event: React.ChangeEvent<HTMLInputElement>, day: Date) => {
        const { name, value } = event.target;

        setSlots(prevSlots => prevSlots.map((slot) => {
            if (slot.day === day) {
                return { ...slot, [name]: value };
            } else {
                return slot;
            }
        }));
    }

    console.log(slots)

    // Form for Date
    const showForm = (day: Date) => {
        const formElement = (
            <div key={day.toISOString()} className="border border-black border-opacity-10 py-4 px-4 flex flex-col gap-3 rounded-lg">
                <label className="text-lg font-semibold">{format(day, 'EEEE', { locale: vi })} - {format(day, 'dd/MM/yyyy')}</label>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Thời gian:</label>
                    </div>
                    <div className="col-span-2">
                        <TimeRangePicker onTimeChange={(time) => handleTimeChange(time, day)} />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1 flex flex-col">
                        <label className="text-lg font-semibold text-gray-600">Số lượng chỗ:</label>
                        <span className="text-gray-500">(1-8 chỗ)</span>
                    </div>
                    <div className="col-span-2">
                        <Input
                            id="availableSlot"
                            name="availableSlot"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="number"
                            maxLength={1}
                            onChange={(event) => handleChangeSlot(event, day)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Giá:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            isMoney
                            id="price"
                            name="price"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="number"
                            onChange={(event) => handleChangeSlot(event, day)}
                        />
                    </div>
                </div>
            </div>
        )

        setForms(prevForms => [...prevForms, formElement])
        setSlots(prevSlots => [...prevSlots, { day, startTime: '', endTime: '', price: 0, availableSlot: 0 }])
    }

    //Chọn ngày
    const handleDayClick = (day: Date) => {
        const existingDay = selectedDays.find(selectedDate => isSameDay(selectedDate, day))
        if (existingDay) {
            setSelectedDays(prevDays => prevDays.filter(selectedDate => !isSameDay(selectedDate, day)))
            setForms(prevForms => prevForms.filter(form => form.key !== day.toISOString()))
            setSlots(prevSlots => prevSlots.filter(slot => slot.day.toISOString() !== day.toISOString()))
        } else if (dateRange.startDate && dateRange.endDate) {
            const diffInDays = differenceInDays(new Date(dateRange.endDate), new Date(dateRange.startDate)) + 1
            if (selectedDays.length < diffInDays) {
                setSelectedDays(prevDays => [...prevDays, day])
                showForm(day)
            }
        }
    }

    //Fetch city
    const { data: listCity, error: errorCity } = useSWR<ListCity>(`/api/cities`, fetcher)
    if (errorCity) toast.error(listCity?.message, {
        position: toast.POSITION.TOP_RIGHT
    })
    const optionCity = listCity?.data.map(city => ({ id: city.id, value: city.name, label: city.name })) || []

    // Get state city
    const handleCityChange = (newValue: Option | null) => {
        if (newValue) {
            setSelectedCity(newValue)
            setSelectedDistrict(null)
            setSelectedWard(null)
        }
    }

    // fetch district
    const { data: listDistrict, error: errorDistrict } = useSWR<ListDistrict>(selectCity ? `/api/districts/city/${selectCity.id}` : null, fetcher)
    if (errorDistrict) toast.error(listDistrict?.message, {
        position: toast.POSITION.TOP_RIGHT
    })
    const optionDistrict = listDistrict?.data.map(district => ({ id: district.id, value: district.name, label: district.name })) || []

    // Get state district
    const handleDistrictChange = (newValue: Option | null) => {
        if (newValue) {
            setSelectedDistrict(newValue)
            setSelectedWard(null)
        }
    }

    // fetch ward
    const { data: listWard, error: errorWard } = useSWR<ListWard>(selectDistrict ? `/api/wards/district/${selectDistrict.id}` : null, fetcher)
    if (errorWard) toast.error(listWard?.message, {
        position: toast.POSITION.TOP_RIGHT
    })
    const optionWard = listWard?.data.map(ward => ({ id: ward.id, value: ward.name, label: ward.name })) || []

    // Get state ward
    const handleWardChange = (newValue: Option | null) => {
        if (newValue) {
            setSelectedWard(newValue)
        }
    }

    // String to Time
    const stringToTime = (timeString: string): Date => {
        const [hour, minute] = timeString.split(':')
        let date = new Date()
        date = setHours(date, parseInt(hour))
        date = setMinutes(date, parseInt(minute))
        return date
    }

    // Format Date Time
    const formatTime = (time: Time): Date => {
        let dateTime = new Date();
        dateTime = setHours(dateTime, parseInt(time.hour));
        dateTime = setMinutes(dateTime, parseInt(time.minute));
        return dateTime
    }

    const onSubmit = async () => {
        if (setIsLoading) setIsLoading(true)

        if (!uploadImages[0] || !selectCity || !selectDistrict || !selectWard || !dateRange.endDate
            || !dateRange.startDate || selectedDays.length === 0 || !formGlobal.title || formGlobal.title.trim() === ""
            || formGlobal.title.length > 10 || formGlobal.title.length < 100 || !formGlobal.address || formGlobal.address.trim() === ""
            || formGlobal.address.length > 10 || formGlobal.address.length < 100 || !formGlobal.description || formGlobal.description.trim() === ""
            || formGlobal.description.length > 50 || formGlobal.description.length < 500 || !selectLevel || !selectCategory) {

            if (!uploadImages[0]) {
                toast.error("Ảnh không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            } else if (!formGlobal.title || formGlobal.title.trim() === "") {
                toast.error("Tên bài đăng không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (formGlobal.title.length < 10 || formGlobal.title.length > 100) {
                toast.error("Tên bài đăng từ 10-100 ký tự", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (!selectCity) {
                toast.error("Thành phố không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (!selectDistrict) {
                toast.error("Quận không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (!selectWard) {
                toast.error("Phường không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (!formGlobal.address || formGlobal.address.trim() === "") {
                toast.error("Địa chỉ không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            } else if (formGlobal.address.length < 10 || formGlobal.address.length > 100) {
                toast.error("Địa chỉ từ 10-100 ký tự", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (!dateRange.endDate || !dateRange.startDate) {
                toast.error("Phạm vi ngày không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (selectedDays.length === 0) {
                toast.error("Chọn ngày không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            for (const slot of slots) {
                const start = stringToTime(slot.startTime)
                const end = stringToTime(slot.endTime)

                if (isBefore(end, start)) {
                    toast.error(`Thời gian kết thúc không thể nhỏ hơn thời gian bắt đầu của ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                } else if (differenceInHours(end, start) < 1) {
                    toast.error(`Thời gian bắt đầu và kết thúc phải cách nhau ít nhất 1 giờ của ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                } else if (isBefore(start, formatTime({ hour: '6', minute: '00' }))) {
                    toast.error(`Thời gian bắt đầu không thể trước 6:00 AM của ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                } else if (isBefore(formatTime({ hour: '24', minute: '00' }), end)) {
                    toast.error(`Thời gian kết thúc không thể sau 24:00 của ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                }

                if (!slot.availableSlot || slot.availableSlot === 0) {
                    toast.error(`Chỗ không được để trống của ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                } else if (slot.availableSlot < 1 || slot.availableSlot > 8) {
                    toast.error(`Số lượng chỗ phải từ 1 đến 8 ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                }

                if (!slot.price || slot.price === 0) {
                    toast.error(`Giá không được để trống của ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                } else if (slot.price < 10000 || slot.price > 100000000) {
                    toast.error(`Giá phải từ 10,000 VNĐ đến 100,000,000 VNĐ ${format(slot.day, 'dd/MM/yyyy')}`, {
                        position: toast.POSITION.TOP_RIGHT
                    })
                    if (setIsLoading) setIsLoading(false)
                    return
                }
            }

            if (!selectCategory) {
                toast.error("Thể loại không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (!selectLevel) {
                toast.error("Kỹ năng không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            if (!formGlobal.description || formGlobal.description.trim() === "") {
                toast.error("Mô tả không được để trống", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            } else if (formGlobal.description.length < 50 || formGlobal.description.length > 500) {
                toast.error("Mô tả từ 50-500 ký tự", {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }
        }

        const formattedSlots = slots.map(slot => {
            const startDate = new Date(slot.day);
            const endDate = new Date(slot.day);

            const [startHours, startMinutes] = slot.startTime.split(':').map(Number);
            const [endHours, endMinutes] = slot.endTime.split(':').map(Number);

            startDate.setHours(startHours, startMinutes);
            endDate.setHours(endHours, endMinutes);

            return {
                startTime: startDate.toISOString(),
                endTime: endDate.toISOString(),
                price: slot.price,
                availableSlot: slot.availableSlot,
            }
        })

        console.log(formattedSlots)

        if (user && user.id) {
            const res = await postBadmintonService({
                id: user.id,
                title: formGlobal.title,
                address: `${selectCity.value}, ${selectDistrict.value}, ${selectWard.value}, ${formGlobal.address}`,
                slots: formattedSlots,
                levelSlot: selectLevel.value,
                categorySlot: selectCategory.value,
                description: formGlobal.description,
                highlightUrl: uploadImages[0],
                imgUrls: uploadImages
            })

            console.log(res)

            if (res.data == null) {
                toast.error(res.message, {
                    position: toast.POSITION.TOP_RIGHT
                })
                if (setIsLoading) setIsLoading(false)
                return
            }

            toast.success(res.message, {
                position: toast.POSITION.TOP_RIGHT
            })
            router.push("/")
        }

        if (setIsLoading) setIsLoading(false)
    }


    return (
        <form className="grid lg:grid-cols-2 grid-cols-1 gap-10" onSubmit={handleSubmit(onSubmit)}>
            <div className="col-span-1">
                <ThumbGallery setImages={setUploadImages} />
            </div>
            <div className="col-span-1">
                <div className="relative">
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Tên bài đăng:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5] border-none"
                                    type="text"
                                    maxLength={100}
                                    value={formGlobal.title}
                                    onChange={(e) => handleChange(e, setFormGlobal)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Thành Phố:</label>
                            </div>
                            <div className="col-span-2">
                                <Select
                                    name="city"
                                    options={optionCity}
                                    styles={customStyles}
                                    instanceId="listCity"
                                    placeholder="Chọn thành phố"
                                    onChange={handleCityChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Quận/Huyện:</label>
                            </div>
                            <div className={`col-span-2 ${!selectCity ? "cursor-not-allowed" : ""}`}>
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
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Phường/Xã:</label>
                            </div>
                            <div className={`col-span-2 ${!selectDistrict ? "cursor-not-allowed" : ""}`}>
                                <Select
                                    name="ward"
                                    options={optionWard}
                                    styles={customStyles}
                                    instanceId="listWard"
                                    placeholder="Chọn Phường/Xã"
                                    onChange={handleWardChange}
                                    isDisabled={!selectDistrict}
                                    value={selectWard}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Địa chỉ:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="address"
                                    name="address"
                                    colorInput="bg-[#F5F5F5] border-none"
                                    type="text"
                                    maxLength={100}
                                    value={formGlobal.address}
                                    onChange={(e) => handleChange(e, setFormGlobal)}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Phạm vi ngày:</label>
                            </div>
                            <div className="col-span-2">
                                <Datepicker
                                    i18n={"vi"}
                                    value={dateRange}
                                    onChange={handleDateChange}
                                    primaryColor={"blue"}
                                    displayFormat={"DD/MM/YYYY"}
                                    inputClassName="light w-full bg-[#F5F5F5] border-none py-3 px-6 focus:ring-0 rounded-lg"
                                    minDate={startOfDay(new Date())}
                                    maxDate={addYears(new Date(), 2)}
                                    showShortcuts={true}
                                    configs={{
                                        shortcuts: {
                                            today: "Hôm nay",
                                            next3Days: {
                                                text: "Chọn 3 ngày",
                                                period: {
                                                    start: new Date(),
                                                    end: addDays(new Date(), 2)
                                                },
                                            },
                                            next5Days: {
                                                text: "Chọn 5 ngày",
                                                period: {
                                                    start: new Date(),
                                                    end: addDays(new Date(), 4)
                                                },
                                            },
                                            next7Days: {
                                                text: "Chọn 7 ngày",
                                                period: {
                                                    start: new Date(),
                                                    end: addDays(new Date(), 6)
                                                },
                                            }
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        {showDateField && (
                            <div className="grid grid-cols-3 gap-3 items-center">
                                <div className="col-span-1">
                                    <label className="text-lg font-semibold text-gray-600">Chọn Ngày:</label>
                                </div>
                                <div className="col-span-2">
                                    {dateRange.startDate && dateRange.endDate && (
                                        <div className="flex flex-row flex-wrap gap-3">
                                            {eachDayOfInterval({
                                                start: new Date(dateRange.startDate),
                                                end: new Date(dateRange.endDate)
                                            }).map((date, index) => (
                                                <div
                                                    key={index}
                                                    title={format(date, 'dd/MM/yyyy')}
                                                    onClick={() => handleDayClick(date)}
                                                    className={`
                                                    border 
                                                    border-black 
                                                    border-opacity-10 
                                                    whitespace-nowrap 
                                                    px-2 
                                                    py-1 
                                                    font-semibold 
                                                    ${selectedDays.find(selectedDate =>
                                                        isSameDay(selectedDate, date)) ?
                                                            'bg-primary-blue-cus text-white' :
                                                            'text-primary-blue-cus bg-white'}
                                                    `}
                                                >
                                                    {format(date, 'EEEE', { locale: vi })}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {forms}
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Thể loại:</label>
                            </div>
                            <div className="col-span-2">
                                <Select
                                    name="category"
                                    options={listCategory}
                                    styles={customStyles}
                                    instanceId="category"
                                    placeholder="Chọn thể loại"
                                    value={selectCategory}
                                    onChange={setSelectCategory}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Kỹ năng:</label>
                            </div>
                            <div className="col-span-2">
                                <Select
                                    name="level"
                                    options={listLevel}
                                    styles={customStyles}
                                    instanceId="level"
                                    placeholder="Chọn kỹ cấp"
                                    value={selectLevel}
                                    onChange={setSelectLevel}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Mô tả:</label>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    flagInput
                                    id="description"
                                    name="description"
                                    colorInput="bg-[#F5F5F5] border-none"
                                    type="text"
                                    value={formGlobal.description}
                                    onChange={(e) => handleChange(e, setFormGlobal)}
                                    maxLength={500}
                                />
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 grid-cols-1">
                            <div className="lg:col-span-1" />
                            <div className="lg:col-span-2 col-span-1 py-4 flex justify-center">
                                {isLoading ? (
                                    <Button
                                        title={<Loading loading={isLoading} color="white" />}
                                        style="px-16 py-3 text-xl"
                                        type="submit"
                                        isHover={false}
                                    />
                                ) : (
                                    <Button
                                        title="Đăng bài"
                                        style="px-16 py-3 text-xl"
                                        type="submit"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default PostNewForm