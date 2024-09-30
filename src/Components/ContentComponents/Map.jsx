import React from 'react';
import SearchResult from './SearchResult';

const Map = () => {
    return (
        <div className='bg-gray-100 h-screen w-screen flex items-center justify-center'>
            <div className=' flex flex-col items-start fixed top-0 left-0 ml-52 mt-10'>
               <SearchResult />
            </div>
            <p className='text-black text-xl'>We will be adding map soon. Stay tuned !</p>
        </div>
    );
};

export default Map;
