/** @format */
// src/components/CurrencyConverter.jsx atau src/components/CurrencyConverter.tsx
import React, { useState } from "react";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertCurrency = () => {
    // Implement conversion logic here
    // You can use an API or predefined conversion rates
    // For simplicity, let's assume a fixed conversion rate
    const conversionRate = 0.85; // 1 USD to EUR
    const result = amount * conversionRate;
    setConvertedAmount(result);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label>
          Amount:
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          From Currency:
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}>
            <option value='USD'>USD</option>
            {/* Add more currency options as needed */}
          </select>
        </label>
      </div>
      <div>
        <label>
          To Currency:
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}>
            <option value='EUR'>EUR</option>
            {/* Add more currency options as needed */}
          </select>
        </label>
      </div>
      <div>
        <button onClick={convertCurrency}>Convert</button>
      </div>
      <div>
        <p>Converted Amount: {convertedAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
