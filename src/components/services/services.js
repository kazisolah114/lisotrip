"use client";
import { useState } from 'react';
import './services.css';
import ServicesMenu from './ServicesMenu';
import Flight from './Flight/Flight';

const Services = () => {

    const [clickedService, setClickedService] = useState('flight');
    // console.log(clickedService)

    return (
        <div className="services-component">
            <div className="services-content py-16 container mx-auto px-48">
                <div className='services-menu flex justify-center'>
                    <ServicesMenu clickedService={clickedService} setClickedService={setClickedService} />
                </div>
                <div className='services-main bg-white rounded-xl p-12'>
                    {
                        clickedService == 'flight' ?
                        <Flight />
                        :
                        clickedService == 'hotel' ?
                        <div>Hotel</div>
                        :
                        clickedService == 'tour' ?
                        <div>Tour</div>
                        :
                        clickedService == 'visa' ?
                        <div>Visa</div>
                        :
                        ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
