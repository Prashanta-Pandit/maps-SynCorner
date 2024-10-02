import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { SearchResultContext } from './SearchResult';

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const Map = () => {
    const { selectedFuelType, searchCity, searchItem } = useContext(SearchResultContext);

    const [center, setCenter] = useState({ lat: -35.2835, lng: 149.1281, }); // Syd cordinates by default. 

    const GeocodeAPI = 'AIzaSyDKzvjuPXE0uUFkhYcWHthMbsQoPE4JaL4';

    useEffect(() => {
        const fetchCordinates = async (suburb) => {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${suburb}&key=${GeocodeAPI}`);
            const data = await response.json();
    
            if (data.results.length > 0) {
                const location = data.results[0].geometry.location;
                setCenter({
                    lat: location.lat,
                    lng: location.lng,
                });
                console.log(`The coordinates for ${searchItem} are: ${location.lat} & ${location.lng}`);
            }
        };
    
        if (searchItem) {
            fetchCordinates(searchItem);
        }
    }, [searchItem]);
    
    
    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center relative'>
            {/* Main container for Google Map */}
            <div className="w-full h-full relative">
                <LoadScript googleMapsApiKey="AIzaSyDKzvjuPXE0uUFkhYcWHthMbsQoPE4JaL4">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={15}
                    >
                        {/* Add markers or other Google Maps components here */}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Map;



