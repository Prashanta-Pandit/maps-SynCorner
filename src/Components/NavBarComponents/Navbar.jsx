import React, { useState } from 'react';
import { AlignJustify, Map } from 'lucide-react';
import Maps from '../ContentComponents/Map';

export default function Navbar() {
  const [showMap, setShowMap] = useState(true); // Initial state is true to show Map
  const [isExpanded, setIsExpanded] = useState(true); // State to manage navbar size

  const toggleMap = (event) => {
    event.stopPropagation(); // Prevent triggering the row click event
    setShowMap(!showMap);
  };

  const toggleNav = () => {
    setIsExpanded(!isExpanded); // Toggle between expanded and collapsed navbar
  };

  return (
    <div className="flex h-screen">
      {/* Vertical Navbar with dynamic width */}
      <nav
        className={`${
          isExpanded ? 'w-44' : 'w-14'
        } h-screen p-4 flex flex-col items-start fixed top-0 left-0 transition-[width] duration-500 ease-in-out shadow-2xl`}
        onClick={toggleNav} // Toggle navbar size
      >
        <h1
          className={`text-neutral-700 font-bold text-2xl ${
            isExpanded ? 'block' : 'hidden'
          }`} // Show the title only when expanded
        >
          SynCorner
        </h1>

        {/* Toggle button (visible on small screens) */}
        <button
          className={`text-neutral-600 font-semibold ${isExpanded ? 'hidden' : 'block'} mb-4 mt-4`}
          aria-label="Toggle Navbar"
        >
          <AlignJustify />
        </button>

        {/* Map button only visible on medium and larger screens */}
        <button
          className={`flex flex-row text-neutral-600 font-semibold mt-4 justify-between space-x-4 hover:bg-neutral-200 p-2 pr-16 rounded-lg ${
            isExpanded ? 'block' : 'hidden'
          }`} // Show Map button only when expanded
        >
          <Map />
          <span>Map</span>
        </button>
      </nav>

      {/* Main content container */}
      <div className={`${isExpanded ? 'ml-44' : 'ml-14'} w-full h-screen overflow-hidden transition-all duration-500 ease-in-out`}>
        {showMap && <Maps />}
      </div>
    </div>
  );
}




