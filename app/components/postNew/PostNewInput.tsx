"use client"

import Select from "react-select"
import { Button } from "../providers"
import Input from "../providers/form/Input"
import Datepicker from "react-tailwindcss-datepicker"
import { useState } from "react"
import { addDays, addYears, differenceInDays, eachDayOfInterval, format, isSameDay, startOfDay } from 'date-fns';
import { vi } from 'date-fns/locale';

const PostNewInput = () => {
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: 'none',
            paddingLeft: '1rem',
            marginLeft: '0px',
            backgroundColor: '#F5F5F5',
            paddingTop: '5px',
            paddingBottom: '5px',
            boxShadow: 'none !important',
            "*": {
                boxShadow: "none !important",
            },
            '&:hover': {
                border: 'none !important',
                boxShadow: 'none !important',
                outline: 'none !important',
            },
            '&:focus': {
                border: 'none !important',
                boxShadow: 'none !important',
                outline: 'none !important',
            },
        }),
    };

    const [dateRange, setDateRange] = useState({
        startDate: null,
        endDate: null
    })

    const [sessions, setSessions] = useState(0)
    const [selectedDays, setSelectedDays] = useState<Date[]>([])

    const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        if (dateRange.startDate && dateRange.endDate) {
            const diffInDays = differenceInDays(new Date(dateRange.endDate), new Date(dateRange.startDate)) + 1
            if (value > diffInDays) {
                alert(`Bạn chỉ có thể nhập tối đa ${diffInDays} buổi`);
                return;
            }
        }
        setSessions(value)
        setSelectedDays([])
    }

    const handleDateChange = (newValue: any) => {
        const { startDate, endDate } = newValue;
        if (startDate && endDate) {
            const diffInDays = differenceInDays(new Date(endDate), new Date(startDate));
            if (diffInDays > 7) {
                alert('Khoảng cách giữa ngày bắt đầu và ngày kết thúc không được vượt quá 7 ngày')
                return;
            }
        }
        setDateRange(newValue)
        setSessions(0)
        setSelectedDays([])
    }

    const handleDayClick = (day: Date) => {
        if (sessions > 0) {
            const existingDay = selectedDays.find(selectedDate => isSameDay(selectedDate, day))
            if (existingDay) {
                setSelectedDays(prevDays => prevDays.filter(selectedDate => !isSameDay(selectedDate, day)))
            } else if (selectedDays.length < sessions) {
                setSelectedDays(prevDays => [...prevDays, day])
            }
        }
    }

    const formatSelectedDays = () => {
        const days = selectedDays.map(date => format(date, 'dd')).join(';')
        const months = Array.from(new Set(selectedDays.map(date => format(date, 'MM')))).join(';')
        const years = Array.from(new Set(selectedDays.map(date => format(date, 'yyyy')))).join(';')

        return { days, months, years }
    }

    const formattedDates = formatSelectedDays();
    const { days, months, years } = formattedDates

    return (
        <div className="relative">
            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1 flex flex-col">
                        <label className="text-lg font-semibold text-gray-600">Tên bài đăng:</label>
                        <span className="text-gray-500">(Giới hạn 100 ký tự)</span>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="title"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Thành Phố:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="location"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Quận/Huyện:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="location"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Phường/Xã:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="location"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Địa chỉ:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="location"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1 flex flex-col">
                        <label className="text-lg font-semibold text-gray-600">Phạm vi ngày:</label>
                        <span className="text-gray-500">(Chọn tối đa 7 ngày & sau khi chọn mới hiển thị ngày)</span>
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
                            showFooter={true}
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
                                footer: {
                                    cancel: "Đóng",
                                    apply: "Áp dụng"
                                }
                            }}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1 flex flex-col">
                        <label className="text-lg font-semibold text-gray-600">Buổi:</label>
                        <span className="text-gray-500">(Số buổi nhập không được vượt qua số ngày chọn)</span>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="sessions"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="number"
                            value={sessions}
                            onChange={handleSessionChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1 flex flex-col">
                        <label className="text-lg font-semibold text-gray-600">Ngày:</label>
                        <span className="text-gray-500">(Số ngày chọn không vượt qua số buổi nhập)</span>
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
                                        style={{ cursor: sessions > 0 ? 'pointer' : 'not-allowed' }}
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
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Thời gian:</label>
                    </div>
                    <div className="col-span-2">
                        <Select
                            styles={customStyles}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Giá:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="price"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="number"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Số lượng chỗ:</label>
                    </div>
                    <div className="col-span-2">
                        <Select
                            styles={customStyles}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Mode:</label>
                    </div>
                    <div className="col-span-2">
                        <Input
                            name="mode"
                            colorInput="bg-[#F5F5F5] border-none"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Kĩ năng yêu cầu:</label>
                    </div>
                    <div className="col-span-2">
                        <Select
                            styles={customStyles}
                            placeholder=""
                        />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-3 items-center">
                    <div className="col-span-1">
                        <label className="text-lg font-semibold text-gray-600">Mô tả:</label>
                        <p className="text-lg text-gray-600"> Từ 200 -300 từ </p>
                    </div>
                    <div className="col-span-2">
                        <div className="relative flex items-center">
                            <textarea
                                className="
                                    bg-[#F5F5F5]
                                    w-full 
                                    rounded-lg 
                                    outline-none
                                    border-none
                                    focus:ring-0
                                    text-base
                                    py-3    
                                    px-6
                                    transition
                                    duration-300
                                "
                                rows={5}
                                typeof="text"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1">
                    <div className="lg:col-span-1" />
                    <div className="lg:col-span-2 col-span-1 py-4 flex justify-center">
                        <Button
                            title="Đăng bài"
                            style="px-16 py-3 text-xl"
                            type="submit"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNewInput