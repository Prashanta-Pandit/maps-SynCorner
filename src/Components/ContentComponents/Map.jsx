import React, { useContext } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { SearchResultContext } from './SearchResult';

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const center = {
    lat: -35.2835, // Example: Canberra latitude
    lng: 149.1281, // Example: Canberra longitude
};

const Map = () => {
    const { selectedFuelType, searchSuburb } = useContext(SearchResultContext);

    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center relative'>
            {/* Main container for Google Map */}
            <div className="w-full h-full relative">
                <LoadScript googleMapsApiKey="AIzaSyDKzvjuPXE0uUFkhYcWHthMbsQoPE4JaL4">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={14}
                    >
                        {/* Add markers or other Google Maps components here */}
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default Map;



