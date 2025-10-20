'use client';
import React from 'react';
import Image from 'next/image';
import personIcon from '../assets/icon-person.svg'; // make sure this file exists

interface PeopleInputProps {
  people: number | '';
  setPeople: React.Dispatch<React.SetStateAction<number | ''>>;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPeople(value === '' ? '' : parseInt(value));
  };

  return (
    <div className="input-group">
      <div className="label-row">
        <label htmlFor="people">Number of People</label>
      </div>
      <div className="input-with-icon">
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
