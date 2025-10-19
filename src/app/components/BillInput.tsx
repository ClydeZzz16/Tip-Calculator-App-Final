'use client';

import React from 'react';

interface BillInputProps {
  bill: number | '';
  setBill: React.Dispatch<React.SetStateAction<number | ''>>;
}

export default function BillInput({ bill, setBill }: BillInputProps) {
  return (
    <div className="input-group">
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        type="number"
        placeholder="0"
        value={bill}
        onChange={(e) => setBill(e.target.value === '' ? '' : parseFloat(e.target.value))}
      />
    </div>
  );
}
