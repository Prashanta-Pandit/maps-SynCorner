import React, { useState, createContext } from 'react';
import { Search } from 'lucide-react';

const SearchResultContext = createContext();

const SearchResult = ({ children }) => {
    // Set the default value to "E10"
    const [selectedFuelType, SetSelectedFuelType] = useState('E10');
    const [searchSuburb, setSearchSuburb] = useState('');

    const [isExpanded, setIsExpanded] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
    }

    return (
        <>
            <form className="my-6 max-w-lg mx-auto hidden md:block" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row border border-black rounded-lg overflow-hidden">
                    {/* Dropdown menu */}
                    <div className="relative w-full md:w-1/2">
                    <select
                        id="fuel-type"
                        className="w-full p-4 text-sm text-gray-950 bg-neutral-100 focus:outline-none"
                        value={selectedFuelType} // Set default value in the dropdown
                        onChange={(e) => SetSelectedFuelType(e.target.value)}
                    >
                        <option value="E10">E10</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Premium 91">Premium Unleaded 91</option>
                        <option value="Premium 98">Premium 98</option>
                    </select>
                    </div>

                    {/* Search input with button */}
                    <div className="relative w-full md:w-1/2 flex items-stretch mt-4 md:mt-0">
                    <input
                        type="search"
                        className="p-3 w-full text-sm text-gray-950 bg-white border-l-0 focus:outline-none"
                        placeholder="Your Suburb"
                        onChange={(e) => setSearchSuburb(e.target.value)}
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

            {/* On smaller screens, show a fixed button at the bottom-right corner */}
            <button
                className="absolute z-10 top-16 right-8 p-2 bg-black text-white rounded-xl shadow-lg hover:bg-neutral-600 md:hidden"
                >
                <div className="flex flex-row items-center space-x-2">
                    <span>Search</span>
                    <Search className="h-5 w-5" />
                </div>
            </button>

            <SearchResultContext.Provider value={{ selectedFuelType, searchSuburb }}>
                {children}
            </SearchResultContext.Provider>
        </>
    );
};

export default SearchResult;

export { SearchResultContext };




