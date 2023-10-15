import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { differenceInHours, setHours, setMinutes, isBefore, format } from 'date-fns';
import { toast } from 'react-toastify';

interface Time {
    hour: string;
    minute: string;
}

interface Option {
    value: string | number;
    label: string;
}

interface TimeRangePickerProps {
    onTimeChange: (time: { startTime: string; endTime: string }) => void;
}

const TimeRangePicker: React.FC<TimeRangePickerProps> = ({ onTimeChange }) => {
    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: 'none',
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

    const [startTime, setStartTime] = useState<Time>({ hour: '6', minute: '00' });
    const [endTime, setEndTime] = useState<Time>({ hour: '7', minute: '00' });

    useEffect(() => {
        const start = formatTime(startTime);
        const end = formatTime(endTime);

        if (isBefore(end, start)) {
            toast.error("Thời gian kết thúc không thể nhỏ hơn thời gian bắt đầu", {
                position: toast.POSITION.TOP_RIGHT
            })
            return
        }

        if (differenceInHours(end, start) < 1) {
            toast.error("Thời gian bắt đầu và kết thúc phải cách nhau ít nhất 1 giờ", {
                position: toast.POSITION.TOP_RIGHT
            })
            return
        }

        if (isBefore(start, formatTime({ hour: '6', minute: '00' }))) {
            toast.error("Thời gian bắt đầu không thể trước 6:00 AM", {
                position: toast.POSITION.TOP_RIGHT
            })
            return
        }

        if (isBefore(formatTime({ hour: '24', minute: '00' }), end)) {
            toast.error("Thời gian kết thúc không thể sau 24:00", {
                position: toast.POSITION.TOP_RIGHT
            })
            return
        }
        onTimeChange({
            startTime: formatTimeString(startTime),
            endTime: formatTimeString(endTime),
        });
    }, [startTime, endTime]);

    const formatTime = (time: Time): Date => {
        let dateTime = new Date();
        dateTime = setHours(dateTime, parseInt(time.hour));
        dateTime = setMinutes(dateTime, parseInt(time.minute));
        return dateTime
    }

    const formatTimeString = (time: Time): string => {
        let dateTime = new Date();
        dateTime = setHours(dateTime, parseInt(time.hour));
        dateTime = setMinutes(dateTime, parseInt(time.minute));
        return format(dateTime, 'HH:mm');
    }

    const hours = Array.from({ length: 24 }, (_, i) => ({ value: i, label: String(i).padStart(2, '0') }));
    const minutes = Array.from({ length: 60 }, (_, i) => ({ value: i, label: String(i).padStart(2, '0') }));

    const handleHourChange = (timeSetter: React.Dispatch<React.SetStateAction<Time>>) => (value: Option | null) => {
        if (value) {
            timeSetter((prevTime) => ({ ...prevTime, hour: value.value.toString() }));
        }
    };

    const handleMinuteChange = (timeSetter: React.Dispatch<React.SetStateAction<Time>>) => (value: Option | null) => {
        if (value) {
            timeSetter((prevTime) => ({ ...prevTime, minute: value.value.toString() }));
        }
    };

    return (
        <div className="flex space-x-0 gap-3 sm:gap-0 sm:space-x-4 xl:flex-row lg:flex-col lg:space-x-0 lg:gap-3 sm:flex-row flex-col items-baseline sm:items-center lg:items-baseline xl:items-center">
            <div className="flex space-x-2">
                <Select
                    isSearchable={false}
                    options={hours}
                    value={hours.find(h => h.value === Number(startTime.hour))}
                    onChange={handleHourChange(setStartTime)}
                    styles={customStyles}
                    instanceId="startTimeHour"
                />
                <Select
                    isSearchable={false}
                    options={minutes}
                    value={minutes.find(m => m.value === Number(startTime.minute))}
                    onChange={handleMinuteChange(setStartTime)}
                    styles={customStyles}
                    instanceId="startTimeMinute"
                />
            </div>
            <div>-</div>
            <div className="flex space-x-2">
                <Select
                    isSearchable={false}
                    options={hours}
                    value={hours.find(h => h.value === Number(endTime.hour))}
                    onChange={handleHourChange(setEndTime)}
                    styles={customStyles}
                    instanceId="endTimeHour"
                />
                <Select
                    isSearchable={false}
                    options={minutes}
                    value={minutes.find(m => m.value === Number(endTime.minute))}
                    onChange={handleMinuteChange(setEndTime)}
                    styles={customStyles}
                    instanceId="endTimeMinute"
                />
            </div>
        </div>
    )
}

export default TimeRangePicker;
