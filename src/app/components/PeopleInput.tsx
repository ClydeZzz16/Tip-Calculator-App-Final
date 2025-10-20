'use client';
import React from 'react';
import Image from 'next/image';
import personIcon from '../assets/icon-person.svg'; // make sure this path is correct

interface PeopleInputProps {
  people: number | '';
  setPeople: React.Dispatch<React.SetStateAction<number | ''>>;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPeople(value === '' ? '' : parseInt(value));
  };

  const isError = people === 0; // ✅ detect zero

  return (
    <div className="input-group">
      <div className="label-row">
        <label htmlFor="people">Number of People</label>
        {isError && <span className="error-text">Can’t be zero</span>}
      </div>

      <div className={`input-with-icon ${isError ? 'input-error' : ''}`}>
        <Image src={personIcon} alt="Person Icon" className="input-icon" />
        <input
          type="number"
          id="people"
          placeholder="0"
          value={people}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
