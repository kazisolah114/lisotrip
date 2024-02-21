import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../services.css';

const DatePicker = () => {
    const [labelController, setLabelController] = useState(false);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const handleSelect = (ranges) => {
        // console.log(ranges);
        setSelectionRange({
            startDate: ranges.selection.startDate,
            endDate: ranges.selection.endDate,
            key: 'selection',
        });

        // Check if both startDate and endDate are selected, then close the calendar
        if (ranges.selection.startDate !== ranges.selection.endDate) {
            setShowCalendar(false);
            setLabelController(true);
        }
    };
    const formatDate = (date, options) => {
        if (date) {
            return date.toLocaleDateString(undefined, options);
        } else {
            return '';
        }
    };



    return (
        <div>
            <div className='date-picker border relative border-gray-300 rounded-md px-4 flex items-center justify-between cursor-pointer' onClick={() => setShowCalendar(!showCalendar)}>
                <div className='leading-[0]'>
                    <label className={`text-[#494949] cursor-pointer ${labelController ? 'relative bottom-[22px] text-[13px]' : ''}`}>Leaving Date</label>
                    {labelController &&
                        <p className='text-[#0c273d] font-semibold'>{formatDate(selectionRange.startDate, { year: 'numeric', month: 'short', day: 'numeric' }) || ''}</p>
                    }
                    {labelController &&
                    <label className={`text-[#494949] cursor-pointer ${labelController ? 'relative -bottom-[22px] text-[13px]' : ''}`}>{formatDate(selectionRange.startDate, { weekday: 'long' }) || ''}</label>
                    }
                </div>
                <span className='text-[#494949]'>—</span>
                <div className='leading-[0]'>
                    <label className={`text-[#494949] cursor-pointer ${labelController ? 'relative bottom-[22px] text-[13px]' : ''}`}>Returning Date</label>
                    {labelController &&
                        <p className='text-[#0c273d] font-semibold'>{formatDate(selectionRange.endDate, { year: 'numeric', month: 'short', day: 'numeric' }) || ''}</p>
                    }
                    {labelController &&
                    <label className={`text-[#494949] cursor-pointer ${labelController ? 'relative -bottom-[22px] text-[13px]' : ''}`}>{formatDate(selectionRange.endDate, { weekday: 'long' }) || ''}</label>
                    }
                </div>
            </div>
            {showCalendar && (
                <div className='absolute'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={handleSelect}
                        onClose={() => setShowCalendar(false)} // Close the calendar when clicking outside
                    />
                </div>
            )}
        </div>
    );
};

export default DatePicker;
