import { FaHotel, FaPassport, FaPlaneDeparture, FaUmbrellaBeach } from "react-icons/fa";
const ServicesMenu = ({ clickedService, setClickedService }) => {
    const handleClickedService = (e) => {
        setClickedService(e);
    }
    return (
        <div className="services-item shadow-md bg-white  px-16 py-8 rounded-lg">
            <ul className="flex items-center gap-14">
                <li onClick={() => handleClickedService("flight")} className={`${clickedService == 'flight' && 'active-menu'}`}><FaPlaneDeparture /> Flight</li>
                <li onClick={() => handleClickedService("hotel")} className={`${clickedService == 'hotel' && 'active-menu'}`}><FaHotel /> Hotel</li>
                <li onClick={() => handleClickedService("tour")} className={`${clickedService == 'tour' && 'active-menu'}`}><FaUmbrellaBeach /> Tour</li>
                <li onClick={() => handleClickedService("visa")} className={`${clickedService == 'visa' && 'active-menu'}`}><FaPassport /> Visa</li>
            </ul>
        </div>
    );
};

export default ServicesMenu;