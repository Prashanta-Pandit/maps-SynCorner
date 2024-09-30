import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import SearchResult from './SearchResult';

const mapContainerStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: 0, // Set to 0 or remove this line
};

const center = {
    lat: -35.2835, // Example: Canberra latitude
    lng: 149.1281, // Example: Canberra longitude
};

const Map = () => {
    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center relative'>
            <div className='absolute top-5 left-5 lg:left-96 z-10'> {/* Added z-10 here */}
                <SearchResult />
            </div>
            <div className="w-full h-full overflow-hidden">
                {/* Google Map */}
                <div className="absolute inset-0 z-0"> {/* Set to z-0 to stay behind */}
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
        </div>
    );
};

export default Map;


