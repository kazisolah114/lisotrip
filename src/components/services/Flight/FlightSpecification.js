import React, { useState } from 'react';
import { HiMinus, HiOutlineChevronDown, HiOutlineChevronUp, HiPlus } from "react-icons/hi";

const FlightSpecification = () => {
    const [ticketType, setTicketType] = useState("Round Way");
    const [ticketTypeClicked, setTicketTypeSclicked] = useState(false);
    const [classType, setClassType] = useState("Economy");
    const [classTypeClicked, setClassTypeClicked] = useState(false);
    const [numberOfTraveler, setNumberOfTraveler] = useState({
        adults: 1, children: 0, infant: 0
    });
    const handleTicketType = (value) => {
        setTicketType(value);
        setTicketTypeSclicked(false);

    }
    const handleClassType = (value) => {
        setClassType(value);
        setClassTypeClicked(false);

    }
    return (
        <div className='flight-specification mb-3 flex gap-5'>
            <div className='flex flex-col relative'>
                <p className='cursor-pointer rounded-t-md flex gap-1 items-center ' onClick={() => setTicketTypeSclicked(!ticketTypeClicked)}>{ticketType} {ticketTypeClicked ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</p>
                {ticketTypeClicked &&
                    <ul className='absolute rounded-b-md rounded-t-md top-full z-10 bg-[#093457] w-36 text-white cursor-pointer'>
                        <li className='hover:bg-primary-color-hover px-3 py-2 rounded-t-md' onClick={() => handleTicketType("Round Way")}>Round Way</li>
                        <li className='hover:bg-primary-color-hover px-3 py-2' onClick={() => handleTicketType("One Way")}>One Way</li>
                        <li className='hover:bg-primary-color-hover px-3 py-2 rounded-b-md' onClick={() => handleTicketType("Multi City")}>Mult City</li>
                    </ul>
                }
            </div>
            <div className='flex flex-col relative'>
                <p className='cursor-pointer rounded-t-md flex gap-1 items-center ' onClick={() => setClassTypeClicked(!classTypeClicked)}>{numberOfTraveler.adults + numberOfTraveler.children + numberOfTraveler.infant} {numberOfTraveler.adults + numberOfTraveler.children + numberOfTraveler.infant > 1 ? "Travelers" : "Traveler"} {classType} {classTypeClicked ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}</p>
                {classTypeClicked &&
                    <div className='absolute top-full z-20 w-64 rounded-md bg-[#093457]'>
                        <ul className=''>
                            <li className='px-3 py-3 flex items-center justify-between border-b-[1px] border-gray-500'>
                                <div>
                                    <p className='text-sm text-gray-200'>Adults</p>
                                    <p className='text-xs text-gray-300'>12 years and above</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className="border border-gray-300 p-1 w-6 h-6 leading-6 text-center rounded-full cursor-pointer flex items-center justify-center" onClick={() => {
                                        if (numberOfTraveler.adults > 1) {
                                            setNumberOfTraveler(prevState => ({
                                                ...prevState,
                                                adults: prevState.adults - 1
                                            }));
                                        }
                                    }}><HiMinus className='text-gray-300' /></span>
                                    <p className='w-3 text-gray-300'>{numberOfTraveler.adults}</p>
                                    <span className="border p-1 w-6 h-6 leading-6 text-center rounded-full cursor-pointer flex items-center justify-center" onClick={() =>
                                        setNumberOfTraveler(prevState => ({
                                            ...prevState,
                                            adults: prevState.adults + 1
                                        }))
                                    }><HiPlus className='text-gray-300' /></span>
                                </div>
                            </li>
                            <li className='px-3 py-3 flex items-center justify-between border-b-[1px] border-gray-500'>
                                <div>
                                    <p className='text-sm text-gray-200'>Children</p>
                                    <p className='text-xs text-gray-300'>6 years and above</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className="border border-gray-300 p-1 w-6 h-6 leading-6 text-center rounded-full cursor-pointer flex items-center justify-center" onClick={() => {
                                        if (numberOfTraveler.children > 0) {
                                            setNumberOfTraveler(prevState => ({
                                                ...prevState,
                                                children: prevState.children - 1
                                            }));
                                        }
                                    }}><HiMinus className='text-gray-300' /></span>
                                    <p className='w-3 text-gray-300'>{numberOfTraveler.children}</p>
                                    <span className="border border-gray-300 p-1 w-6 h-6 leading-6 text-center rounded-full cursor-pointer flex items-center justify-center" onClick={() =>
                                        setNumberOfTraveler(prevState => ({
                                            ...prevState,
                                            children: prevState.children + 1
                                        }))
                                    }><HiPlus className='text-gray-300' /></span>
                                </div>
                            </li>
                            <li className='px-3 py-3 flex items-center justify-between border-b-[1px] border-gray-500'>
                                <div>
                                    <p className='text-sm text-gray-200'>Infant</p>
                                    <p className='text-xs text-gray-300'>Below 2 years</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className="border border-gray-300 p-1 w-6 h-6 leading-6 text-center rounded-full cursor-pointer flex items-center justify-center" onClick={() => {
                                        if (numberOfTraveler.infant > 0) {
                                            setNumberOfTraveler(prevState => ({
                                                ...prevState,
                                                infant: prevState.infant - 1
                                            }));
                                        }
                                    }}><HiMinus className='text-gray-300' /></span>
                                    <p className='w-3 text-gray-300'>{numberOfTraveler.infant}</p>
                                    <span className="border border-gray-300 p-1 w-6 h-6 leading-6 text-center rounded-full cursor-pointer flex items-center justify-center" onClick={() =>
                                        setNumberOfTraveler(prevState => ({
                                            ...prevState,
                                            infant: prevState.infant + 1
                                        }))
                                    }><HiPlus className='text-gray-300' /></span>
                                </div>
                            </li>
                        </ul>
                        <ul className=' rounded-b-md  text-white cursor-pointer'>
                            <li className='hover:bg-primary-color-hover px-3 py-2' onClick={() => handleClassType("Economy")}>Economy</li>
                            <li className='hover:bg-primary-color-hover px-3 py-2' onClick={() => handleClassType("Business")}>Business</li>
                            <li className='hover:bg-primary-color-hover px-3 py-2 rounded-b-md' onClick={() => handleClassType("First Class")}>First Class</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default FlightSpecification;