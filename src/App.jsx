import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MasterLayout from './Components/MasterLayout';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MasterLayout />} />
      </Routes>
    </div>
  );
}

