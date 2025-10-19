'use client';

import React from 'react';

interface TipSelectorProps {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}

export default function TipSelector({ tip, setTip }: TipSelectorProps) {
  const tipOptions = [5, 10, 15, 25, 50];

  return (
    <div className="tip-selector">
      <label>Select Tip %</label>
      <div className="tip-grid">
        {tipOptions.map((t) => (
          <button
            key={t}
            className={`tip-btn ${tip === t ? 'active' : ''}`}
            onClick={() => setTip(t)}
          >
            {t}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          value={tip === 0 ? '' : tip}
          onChange={(e) => setTip(e.target.value === '' ? 0 : parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
}
