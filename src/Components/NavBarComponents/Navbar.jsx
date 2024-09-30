import React, { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import Map from '../ContentComponents/Map';

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
    <div className="flex">
      {/* Vertical Navbar with dynamic width */}
      <nav
        className={`${
          isExpanded ? 'w-44' : 'w-12'
        } h-screen p-4 flex flex-col items-start fixed top-0 left-0 transition-[width] duration-500 ease-in-out`}           
        onClick={toggleNav} // Toggle navbar size// Smooth transition for width
      >
        <h1
          className={`text-neutral-700 font-extrabold text-2xl ${
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
          className={`text-neutral-600 font-semibold mt-4 ${
            isExpanded ? 'block' : 'hidden'
          }`} // Show Map button only when expanded
         // onClick={toggleMap}
          aria-label="Toggle Map"
        >
          Map
        </button>
      </nav>

      {/* Main content container */}
      <div className={`${isExpanded ? 'ml-44' : 'ml-12'} w-full h-screen transition-all duration-500 ease-in-out`}>
        {showMap && <Map />}
      </div>
    </div>
  );
}



