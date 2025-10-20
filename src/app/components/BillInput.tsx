'use client';
import React from 'react';
import Image from 'next/image';
import dollarIcon from '../assets/icon-dollar.svg'; // make sure this file exists

interface BillInputProps {
  bill: number | '';
  setBill: React.Dispatch<React.SetStateAction<number | ''>>;
}

export default function BillInput({ bill, setBill }: BillInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBill(value === '' ? '' : parseFloat(value));
  };

  return (
    <div className="input-group">
      <label htmlFor="bill">Bill</label>
      <div className="input-with-icon">
        <Image src={dollarIcon} alt="Dollar Icon" className="input-icon" />
        <input
          type="number"
          id="bill"
          placeholder="0"
          value={bill}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
