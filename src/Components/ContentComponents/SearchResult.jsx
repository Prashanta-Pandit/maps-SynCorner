import React from 'react';
import { Search } from 'lucide-react';

const SearchResult = () => {
    return (
        <form className="max-w-lg mx-auto">
            <div className="flex border border-black shadow-xl rounded-lg overflow-hidden">
                {/* Dropdown menu */}
                <div className="relative w-full">
                    <select
                        id="fuel-type"
                        className="w-full p-4 text-sm text-gray-950 bg-neutral-100"
                    >
                        <option value="">Choose fuel type</option>
                        <option value="E10">E10</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Premium 91">Premium Unleaded 91</option>
                        <option value="Premium 98">Premium 98</option>
                    </select>
                </div>

                {/* Search input with button */}
                <div className="relative w-full flex items-stretch">
                    <input 
                        type="search" 
                        className="p-3 w-full text-sm text-gray-950 bg-white border-l-0 focus:outline-none"
                        placeholder="Your Suburb" 
                        required 
                    />
                    <button 
                        type="submit" 
                        className="p-3 bg-black text-white rounded-r-md border-l border-black hover:bg-neutral-600"
                    >
                        <Search className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchResult;



