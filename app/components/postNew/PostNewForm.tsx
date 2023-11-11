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
import { CreateBadmintonFormData, ListCity, ListDistrict, ListWard, Time } from "@/types"
import { customStyles, postNewInputSchema } from "@/utils"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
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
    const [uploadImages, setUploadImages] = useState<string[]>([])
    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null
    })
    const [selectedDays, setSelectedDays] = useState<Date[]>([])
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [selectCity, setSelectedCity] = useState<Option | null>(null)
    const [selectDistrict, setSelectedDistrict] = useState<Option | null>(null)
    const [selectWard, setSelectedWard] = useState<Option | null>(null)
    const [showDateField, setShowDateField] = useState(false)
    const router = useRouter()

    const { formState: { errors }, register, handleSubmit, setError } = useForm<CreateBadmintonFormData>({
        resolver: yupResolver(postNewInputSchema)
    })

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
                return
            }
        }

        if (startDate == null || endDate == null) {
            setShowDateField(false)
            return
        }

        setDateRange(newValue)
        setSelectedDays([])
        setShowDateField(true)
    }

    //Chọn ngày
    const handleDayClick = (day: Date) => {
        const existingDay = selectedDays.find(selectedDate => isSameDay(selectedDate, day))
        if (existingDay) {
            setSelectedDays(prevDays => prevDays.filter(selectedDate => !isSameDay(selectedDate, day)))
        } else if (dateRange.startDate && dateRange.endDate) {
            const diffInDays = differenceInDays(new Date(dateRange.endDate), new Date(dateRange.startDate)) + 1
            if (selectedDays.length < diffInDays) {
                setSelectedDays(prevDays => [...prevDays, day])
            }
        }
    }

    //Xử lý cắt chuỗi
    const formatSelectedDays = () => {
        const days = selectedDays.map(date => format(date, 'dd')).join(';')
        const months = Array.from(new Set(selectedDays.map(date => format(date, 'MM')))).join(';')
        const years = Array.from(new Set(selectedDays.map(date => format(date, 'yyyy')))).join(';')

        return { days, months, years }
    }

    //Xử lý time picker
    const handleTimeChange = (time: { startTime: string; endTime: string }) => {
        setStartTime(time.startTime)
        setEndTime(time.endTime)
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

    const onSubmit = async (data: CreateBadmintonFormData) => {
        if (setIsLoading) setIsLoading(true)

        const formattedDates = formatSelectedDays()
        const { days, months, years } = formattedDates

        if (!uploadImages[0] || !startTime || !endTime || !selectCity || !selectDistrict || !selectWard || !dateRange.endDate || !dateRange.startDate || selectedDays.length === 0) {
            const start = stringToTime(startTime)
            const end = stringToTime(endTime)

            if (!dateRange.endDate || !dateRange.startDate) {
                setError("dateScope", { message: "Không được để trống" })
            }

            if (isBefore(end, start)) {
                setError("startTime", { message: "Thời gian kết thúc không thể nhỏ hơn thời gian bắt đầu" })
            }

            if (differenceInHours(end, start) < 1) {
                setError("startTime", { message: "Thời gian bắt đầu và kết thúc phải cách nhau ít nhất 1 giờ" })
            }

            if (isBefore(start, formatTime({ hour: '5', minute: '00' }))) {
                setError("startTime", { message: "Thời gian bắt đầu không thể trước 6:00 AM" })
            }

            if (isBefore(formatTime({ hour: '24', minute: '00' }), end)) {
                setError("startTime", { message: "Thời gian kết thúc không thể sau 24:00" })
            }

            if (!uploadImages[0]) {
                setError("imgUrls", { message: "Không được để trống" })
            }

            if (!selectCity) {
                setError("city", { message: "Không được để trống" })
            }

            if (!selectDistrict) {
                setError("district", { message: "Không được để trống" })
            }

            if (!selectWard) {
                setError("ward", { message: "Không được để trống" })
            }

            if (!startTime || !endTime) {
                setError("startTime", { message: "Không được để trống" })
            }

            if (selectedDays.length === 0) {
                setError("day", { message: "Không được để trống" })
            }

            if (setIsLoading) setIsLoading(false)
            return
        }

        //console.log(user?.id, data.title, `${selectCity.value}, ${selectDistrict.value}, ${selectWard.value}, ${data.address}`, days, months, years, startTime, endTime, data.availableSlot, data.price, data.description, uploadImages)

        if (user) {
            const res = await postBadmintonService({
                id: user.id,
                title: data.title,
                address: `${selectCity.value}, ${selectDistrict.value}, ${selectWard.value}, ${data.address}`,
                day: days,
                month: months,
                year: years,
                startTime: startTime,
                endTime: endTime,
                availableSlot: data.availableSlot,
                price: data.price,
                description: data.description,
                highlightUrl: uploadImages[0],
                imgUrls: uploadImages
            })

            //console.log(res)

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
                {errors.imgUrls &&
                    <p className="text-red-500 font-medium h-4">
                        {errors.imgUrls.message}
                    </p>
                }
            </div>
            <div className="col-span-1">
                <div className="relative">
                    <div className="flex flex-col gap-8">
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1 flex flex-col">
                                <label className="text-lg font-semibold text-gray-600">Tên bài đăng:</label>
                                <span className="text-gray-500">(10-50 ký tự)</span>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    id="title"
                                    name="title"
                                    colorInput="bg-[#F5F5F5] border-none"
                                    type="text"
                                    register={register}
                                    errors={errors}
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
                                {errors.city &&
                                    <p className="text-red-500 font-medium h-4">
                                        {errors.city.message}
                                    </p>
                                }
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
                                {errors.district &&
                                    <p className="text-red-500 font-medium h-4">
                                        {errors.district.message}
                                    </p>
                                }
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
                                {errors.ward &&
                                    <p className="text-red-500 font-medium h-4">
                                        {errors.ward.message}
                                    </p>
                                }
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
                                    register={register}
                                    errors={errors}
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
                                {errors.dateScope &&
                                    <p className="text-red-500 font-medium h-4">
                                        {errors.dateScope.message}
                                    </p>
                                }
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
                                    {errors.day &&
                                        <p className="text-red-500 font-medium h-4">
                                            {errors.day.message}
                                        </p>
                                    }
                                </div>
                            </div>
                        )}
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Thời gian:</label>
                            </div>
                            <div className="col-span-2">
                                <TimeRangePicker onTimeChange={handleTimeChange} />
                                {errors.startTime &&
                                    <p className="text-red-500 font-medium h-4">
                                        {errors.startTime.message}
                                    </p>
                                }
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
                                    register={register}
                                    errors={errors}
                                />
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
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    maxLength={1}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 items-center">
                            <div className="col-span-1">
                                <label className="text-lg font-semibold text-gray-600">Mô tả:</label>
                                <p className="text-gray-500"> (Từ 50 -300 từ) </p>
                            </div>
                            <div className="col-span-2">
                                <Input
                                    flagInput
                                    id="description"
                                    name="description"
                                    colorInput="bg-[#F5F5F5] border-none"
                                    type="text"
                                    register={register}
                                    errors={errors}
                                    maxLength={300}
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