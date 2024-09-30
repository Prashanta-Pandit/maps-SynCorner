import React from 'react';
import SearchResult from './SearchResult';

const Map = () => {
    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center relative'>
            <div className='absolute top-5 left-5 lg:left-16'>
                <SearchResult />
            </div>
            <div className="w-full h-full overflow-hidden">
                <img
                    src='/img/maps.png'
                    className='w-full h-full object-cover'
                    alt="Map"
                />
            </div>
        </div>
    );
};

export default Map;

