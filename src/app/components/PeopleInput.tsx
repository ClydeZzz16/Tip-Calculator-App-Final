import React from 'react';

interface PeopleInputProps {
  people: number | '';
  setPeople: React.Dispatch<React.SetStateAction<number | ''>>;
}

export default function PeopleInput({ people, setPeople }: PeopleInputProps) {
  const isError = people === 0 || people === '';

  return (
    <div className="input-group">
      <div className="label-row">
        <label>Number of People</label>
        {people === 0 && <span className="error-text">Can't be zero</span>}
      </div>
      <input
        type="number"
        placeholder="0"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
        className={people === 0 ? 'input-error' : ''}
      />
    </div>
  );
}
