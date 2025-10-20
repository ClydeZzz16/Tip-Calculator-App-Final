'use client';

import React, { useState, useEffect } from 'react';

interface TipSelectorProps {
  tip: number;
  setTip: (value: number) => void;
  resetTrigger?: number;
}

export default function TipSelector({ tip, setTip, resetTrigger }: TipSelectorProps): JSX.Element {
  const [customTip, setCustomTip] = useState<string>('');

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    setCustomTip(value);
    setTip(value === '' ? 0 : parseFloat(value));
  };

  // 👇 This clears the custom tip input whenever reset is triggered
  useEffect(() => {
    setCustomTip('');
    setTip(0);
  }, [resetTrigger]);

  return (
    <div className="tip-selector">
      <label>Select Tip %</label>
      <div className="tip-grid">
        {[5, 10, 15, 25, 50].map((value) => (
          <button
            key={value}
            className={`tip-btn ${tip === value ? 'active' : ''}`}
            onClick={() => setTip(value)}
          >
            {value}%
          </button>
        ))}

        {/* Custom tip input */}
        <input
          type="number"
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomChange}
          className="tip-custom"
        />
      </div>
    </div>
  );
}
