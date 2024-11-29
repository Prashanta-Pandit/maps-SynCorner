import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './Components/MasterLayout';
import SearchResultContextProvider from './Components/ContentComponents/SearchResult'
import ResultsContextProvider   from './Components/NavBarComponents/ResultsContextProvider';
import AvaliableFuelStation from './Components/NavBarComponents/AvaliableFuelStation';

export default function App() {
  return (
    <div>
      <SearchResultContextProvider >
        <ResultsContextProvider >
          <AvaliableFuelStation>
             <Routes>
              <Route path="/" element={<MasterLayout />} />
            </Routes>
          </AvaliableFuelStation>
        </ResultsContextProvider >
      </SearchResultContextProvider >
    </div>
  );
}

