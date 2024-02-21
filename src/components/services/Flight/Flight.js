import Button from '@/components/AtomicComponents/Atoms/Buttons/Button';
import Input from '@/components/AtomicComponents/Atoms/Inputs/Input';
import React, { useEffect, useState } from 'react';
import { FaExchangeAlt, FaPlaneDeparture } from 'react-icons/fa';

import DatePicker from '../DatePicker/DatePicker';
import FlightSpecification from './FlightSpecification';

const Flight = () => {
    // Controlling label going up and down
    const [isLeavingFromClicked, setIsLeavingFromClicked] = useState(false);
    const [isGoingToClicked, setIsGoingToClicked] = useState(false);
    const handleInputLabel = (input, setIsClicked) => {
        setIsClicked(!!input); // Set to true if input is not empty, otherwise false
    }

    // Controlling flight searching
    const [flightData, setFLightData] = useState([]);

    const [departureAirportInfo, setDepartureAirportInfo] = useState(null);
    const [filteredDepartureAirport, setFilteredDepartureAirport] = useState([]);
    const [departureAirportIsSelected, setDepartureAirportIsSelected] = useState(false);

    const [arrivalAirportInfo, setArrivalAirportInfo] = useState(null);
    const [filteredArrivalAirport, setFilteredArrivalAirport] = useState([]);
    const [arrivalAirportIsSelected, setArrivalAirportIsSelected] = useState(false);

    const [airportSwaped, setAirportSwaped] = useState(false);

    useEffect(() => {
        fetch("/flightdata.json")
            .then(res => res.json())
            .then(data => {
                setFLightData(data)
            })
    }, [])
    const handleDepartureAirportInput = (value) => {
        const departureAirport = value.toLowerCase();
        const filtereDeparturedAirport = flightData.airports.filter(airports =>
            (airports.code + airports.name + airports.city + airports.country).toLowerCase().includes(departureAirport));
        setFilteredDepartureAirport(filtereDeparturedAirport)

    }

    const handleArrivalAirportInput = (value) => {
        const arrivalAirport = value.toLowerCase();
        const filtereArrivalAirport = flightData.airports.filter(airports =>
            (airports.code + airports.name + airports.city + airports.country).toLowerCase().includes(arrivalAirport));
        setFilteredArrivalAirport(filtereArrivalAirport)

    }

    const handleSelectedDepartureAirport = (airport) => {
        setDepartureAirportInfo(airport);
        setDepartureAirportIsSelected(true);
    }

    const handleSelectedArrivalAirport = (airport) => {
        setArrivalAirportInfo(airport);
        setArrivalAirportIsSelected(true)
    }

    const handleSwapAirport = () => {
        // Check if both departure and arrival airports are selected
        if (departureAirportInfo && arrivalAirportInfo) {
            // Swap the airport information
            setDepartureAirportInfo(arrivalAirportInfo);
            setArrivalAirportInfo(departureAirportInfo);
        }
        setAirportSwaped(!airportSwaped);
        
    };

    return (
        <form className="" action="">
            <FlightSpecification />
            <div className='flight-main'>
            <div className='depart-return relative'>
                <div className='border border-gray-300 rounded-md px-4 flex items-center'>
                    <label htmlFor="leaving" className={`title-label ${isLeavingFromClicked && 'is-clicked'}`}>Leaving from</label>
                    <Input
                        className='outline-none font-semibold text-[#0c273d]'
                        id="leaving"
                        type="text"
                        autoComplete='off'
                        onInput={(e) => {
                            handleInputLabel(e.target.value, setIsLeavingFromClicked);
                            setDepartureAirportInfo(null);
                            setDepartureAirportIsSelected(false);
                        }}
                        onChange={(e) => handleDepartureAirportInput(e.target.value)}
                        value={departureAirportInfo?.city}
                    />
                    {departureAirportInfo && <label className='airport-address'>({departureAirportInfo.code}) {departureAirportInfo.name}</label>}
                    {isLeavingFromClicked && filteredDepartureAirport.length > 0 && departureAirportIsSelected == false &&
                        <div className={`suggestions w-full bg-white border border-gray-300 rounded-md`}>
                            {
                                filteredDepartureAirport.map((airport, index) =>
                                    <div onClick={() => handleSelectedDepartureAirport(airport)} key={index} className='cursor-pointer hover:bg-blue-100 px-4 py-2 '>
                                        <p className='font-semibold text-[#0c273d]'>{airport.city} ({airport.code})</p>
                                        <p className='font-light text-xs'>{airport.name} <br /> {airport.country}</p>
                                    </div>
                                )
                            }
                        </div>

                    }
                </div>
                <button type="button" className='absolute left-[296px] top-[22px] z-10 bg-primary-color-hover text-white p-2 rounded-full' onClick={handleSwapAirport}><FaExchangeAlt className={`transform duration-300 ${airportSwaped ? 'rotate-180' : ''}`} /></button>
                <div className='border border-gray-300 rounded-md px-4 '>
                    <label htmlFor="going" className={`title-label  ${isGoingToClicked && 'is-clicked'}`}>Going to</label>
                    <Input
                        className='outline-none font-semibold text-[#0c273d]'
                        id="going"
                        type="text"
                        autoComplete='off'
                        onInput={(e) => {
                            handleInputLabel(e.target.value, setIsGoingToClicked);
                            setArrivalAirportInfo(null);
                            setArrivalAirportIsSelected(false);
                        }}
                        onChange={(e) => handleArrivalAirportInput(e.target.value)}
                        value={arrivalAirportInfo?.city}
                    />
                    {arrivalAirportInfo && <label className='airport-address'>({arrivalAirportInfo.code}) {arrivalAirportInfo.name}</label>}
                    {isGoingToClicked && filteredArrivalAirport.length > 0 && arrivalAirportIsSelected == false &&
                        <div className='suggestions absolute w-full bg-white border border-gray-300 rounded-md'>
                            {
                                filteredArrivalAirport.map((airport, index) =>
                                    <div onClick={() => handleSelectedArrivalAirport(airport)} key={index} className='cursor-pointer hover:bg-blue-100 px-4 py-2 '>
                                        <p className='font-semibold text-[#0c273d]'>{airport.city} ({airport.code})</p>
                                        <p className='font-light text-xs'>{airport.name} <br /> {airport.country}</p>
                                    </div>
                                )
                            }
                        </div>
                    }
                </div>
            </div>
            <DatePicker />


            <div className='search'>
                <Button type='submit' className=' bg-primary-color hover:duration-200 hover:bg-primary-color-hover rounded-full text-white font-bold'>
                    Search
                    <FaPlaneDeparture />
                </Button>
            </div>
            </div>
        </form>
    );
};

export default Flight;
