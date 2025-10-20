'use client';

import React from 'react';

interface ResultDisplayProps {
  tipAmount: number;
  total: number;
  reset: () => void;
}

export default function ResultDisplay({ tipAmount, total, reset }: ResultDisplayProps) {
  return (
    <div className="result-box">
      <div className="result-row">
        <div>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <p className="result-value">${tipAmount.toFixed(2)}</p>
      </div>

      <div className="result-row">
        <div>
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p className="result-value">${total.toFixed(2)}</p>
      </div>

      <button className="reset-btn" onClick={reset}>
        RESET
      </button>
    </div>
  );
}
