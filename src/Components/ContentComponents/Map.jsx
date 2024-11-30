import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { SearchResultContextProvider } from './SearchResult';

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const Map = ({ setFormattedAddress }) => {
    const { searchItem } = useContext(SearchResultContextProvider);
    const [center, setCenter] = useState({ lat: -35.2835, lng: 149.1281 }); // Default coordinates (Canberra)
    const GeocodeAPI = 'AIzaSyDKzvjuPXE0uUFkhYcWHthMbsQoPE4JaL4'; 

    useEffect(() => {
        const fetchCoordinates = async (fuelType, suburb) => {
            try {
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?components=locality:${suburb}|country:AU&key=${GeocodeAPI}`);
                const data = await response.json();
        
                if (data.results.length > 0) {
                    const location = data.results[0].geometry.location;
                    setCenter({
                        lat: location.lat,
                        lng: location.lng,
                    });
                    const formattedAddress = data.results[0].formatted_address;
                    setFormattedAddress(formattedAddress);
                    console.log(`The coordinates for ${suburb} are: ${location.lat} & ${location.lng} & the formatted address is ${formattedAddress}`);
                } else {
                    console.error('No results found for the suburb');
                }
            } catch (error) {
                console.error('Error fetching coordinates:', error);
            }
        };
    
        if (searchItem.length > 0) {
            const [fuelType, suburb] = searchItem;
            fetchCoordinates(fuelType, suburb);
        }
    }, [searchItem]); 

    return (
        <div className='bg-gray-100 h-screen w-screen relative'>

            {/* Main container for Google Map */}
            <div className="w-full h-full relative">
                <LoadScript googleMapsApiKey={GeocodeAPI}>
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={15}
                    >
                        {/* You can add markers or other map components here */}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Map;









