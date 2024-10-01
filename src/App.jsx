import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './Components/MasterLayout';
import SearchResultContext from './Components/ContentComponents/SearchResult'

export default function App() {
  return (
    <div>
      <SearchResultContext>
          <Routes>
            <Route path="/" element={<MasterLayout />} />
          </Routes>
      </SearchResultContext>
    </div>
  );
}

