import React, { useContext } from 'react';
import { Phone, Fuel } from 'lucide-react';


const FuelStationCard = ({storeName, storeAddress, fuelPrice, storePhoneNumber, fuelType}) => {

    
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-5">
            <div className="p-4">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                {storeName}
            </h5>
            <div className=" bg-yellow-100 flex items-center mt-2 space-x-2">
                <Fuel className='w-4 h-4' aria-label="Phone Icon" />
                <p className="text-gray-700 text-sm">{fuelType} · {fuelPrice}/l</p>
            </div>
            <div className="flex items-center mt-2 space-x-2">
                <Phone className='w-4 h-4' aria-label="Phone Icon" />
                <p className="text-gray-700 text-sm">{storePhoneNumber}</p>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-bold text-gray-900"></span>
                <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-900 focus:ring-4 focus:ring-green-300"
                >
                Get Directions
                </button>
            </div>
            </div> 
        </div>
    )
};

export default FuelStationCard;