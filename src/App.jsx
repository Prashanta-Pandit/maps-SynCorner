import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './Components/MasterLayout';
import SearchResultContextProvider from './Components/ContentComponents/SearchResult'
import ResultsContextProvider   from './Components/NavBarComponents/ResultsContextProvider';

export default function App() {
  return (
    <div>
      <SearchResultContextProvider >
        <ResultsContextProvider >
             <Routes>
              <Route path="/" element={<MasterLayout />} />
            </Routes>
        </ResultsContextProvider >
      </SearchResultContextProvider >
    </div>
  );
}

