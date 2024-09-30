import React from 'react';
import { Search } from 'lucide-react';

const SearchResult = () => {
    return (
        <form className="max-w-lg mx-auto">
            <div className="flex">
                <div className="relative w-full">
                    <input 
                        type="search" 
                        id="search-dropdown" 
                        className="block p-3 w-full z-20 text-sm text-gray-950 bg-white border border-black rounded-lg" 
                        placeholder="Search" 
                        required 
                    />
                    <button 
                        type="submit" 
                        className="absolute top-0 right-0 p-3 text-sm text-white bg-black rounded-r-lg border border-black hover:bg-neutral-600 transition-colors duration-200 ease-in-out"
                    >
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchResult;
