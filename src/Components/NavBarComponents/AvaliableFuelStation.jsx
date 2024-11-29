import React, { useContext, useState, createContext } from 'react';
import { ResultsContextProvider } from './ResultsContextProvider';
import { Fuel } from 'lucide-react';

const selectedFuelStationContextProvider = createContext();

const AvaliableFuelStation = ( {children}) => {
   
    const [isClicked, setIsClicked] = useState(false);
    const { storeData } = useContext(ResultsContextProvider);

    const [ storeName, setStoreName] = useState(null);
    const [ storeAddress, setAddress] = useState(null);
    const [ fuelPrice, setFuelPrice] = useState(null);
    const [ storePhoneNumber, setStorePhoneNumber] = useState(null);
    const [ fuelType, setFuelType ] = useState(null);


    const handleResultClick = (e) => {
        e.stopPropagation();
        setIsClicked(true);
    }

    return (
        <>
              <div className="max-w-md space-y-4 mt-10 max-h-96 overflow-y-scroll scrollbar-visible">

                {/* Show avalaible fuel stations */}

                {storeData.map((rslt) => (
                <div key={rslt.storeId}>
                    <div className="mx-auto space-y-4">
                    <div
                        className="flex items-center space-x-3 bg-white p-4 rounded-lg hover:bg-gray-50 cursor-pointer "
                        onClick={(e) => {
                           handleResultClick(e); // Handle click logic
                           setAddress(rslt.storeAddress);
                           setStoreName(rslt.storeName);
                           setFuelPrice(rslt.fuelPrice);
                           setStorePhoneNumber(rslt.storePhoneNumber);
                           setFuelType(rslt.fuelType);
                        }}
                    >
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-md flex items-center justify-center">
                            <Fuel className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                        <h3 className="text-md font-semibold text-gray-900">{rslt.fuelPrice}</h3>
                        <p className="text-sm text-gray-500">{rslt.storeName} · {rslt.storeAddress}</p>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <selectedFuelStationContextProvider.Provider value ={{ storeName, storeAddress, fuelPrice, storePhoneNumber }}>
                {children}
            </selectedFuelStationContextProvider.Provider>
        </>
    )
};

export default AvaliableFuelStation;
export { selectedFuelStationContextProvider };