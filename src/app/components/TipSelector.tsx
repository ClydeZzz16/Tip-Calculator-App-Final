import React from 'react';

interface TipSelectorProps {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}

export default function TipSelector({ tip, setTip }: TipSelectorProps) {
  const tipValues = [5, 10, 15, 25, 50];

  return (
    <div className="tip-selector">
      <label>Select Tip %</label>
      <div className="tip-grid">
        {tipValues.map((value) => (
          <button
            key={value}
            className={`tip-btn ${tip === value ? 'active' : ''}`}
            onClick={() => setTip(value)}
          >
            {value}%
          </button>
        ))}
        <input
          type="number"
          placeholder="Custom"
          className="tip-custom"
          onChange={(e) => setTip(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
