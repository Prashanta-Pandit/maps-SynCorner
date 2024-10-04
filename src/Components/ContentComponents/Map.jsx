import React, { useContext, useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { SearchResultContext } from './SearchResult';

const mapContainerStyle = {
    width: '100%',
    height: '100%',
};

const Map = () => {
    const { searchItem } = useContext(SearchResultContext);
    const [center, setCenter] = useState({ lat: -35.2835, lng: 149.1281 }); // Default coordinates (Canberra)

    const GeocodeAPI = 'AIzaSyDKzvjuPXE0uUFkhYcWHthMbsQoPE4JaL4'; 

    useEffect(() => {
        const fetchCoordinates = async (city, suburb) => {
            try {
                const address = `${suburb}, ${city}`; // Constructing the address
                const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GeocodeAPI}`);
                const data = await response.json();
        
                if (data.results.length > 0) {
                    const location = data.results[0].geometry.location;
                    setCenter({
                        lat: location.lat,
                        lng: location.lng,
                    });
                    console.log(`The coordinates for ${suburb} are: ${location.lat} & ${location.lng}`);
                } else {
                    console.error('No results found for the suburb');
                }
            } catch (error) {
                console.error('Error fetching coordinates:', error);
            }
        };
    
        if (searchItem.length > 0) { // Ensure searchItem has values
            const [city, suburb] = searchItem; // Destructure searchItem
            fetchCoordinates(city, suburb); // Pass city and suburb separately
        }
    }, [searchItem, GeocodeAPI]); // Add GeocodeAPI to dependencies if it changes

    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center relative'>
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





