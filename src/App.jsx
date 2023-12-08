/** @format */

// src/App.jsx atau src/App.tsx
import React from "react";
import CurrencyConverter from ".//components/CurrencyConverter";

const App = () => {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'></h1>
      <CurrencyConverter />
    </div>
  );
};

export default App;
