'use client';

import React from 'react';

interface PeopleInputProps {
  people: number | '';
  setPeople: React.Dispatch<React.SetStateAction<number | ''>>;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
  return (
    <div className="input-group">
      <label htmlFor="people">Number of People</label>
      <input
        id="people"
        type="number"
        placeholder="0"
        value={people}
        onChange={(e) =>
          setPeople(e.target.value === '' ? '' : parseInt(e.target.value, 10))
        }
      />
    </div>
  );
}
