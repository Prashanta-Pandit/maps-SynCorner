import React from 'react';
import SearchResult from './SearchResult';

const Map = () => {
    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center'>
            <div className=' flex flex-col items-start fixed top-0 left-0 ml-52 mt-10'>
               <SearchResult />
            </div>
            <img
                src='/img/maps.png'
                width="100%"
                height="100%"
                alt="logo"
            />
        </div>
    );
};

export default Map;
