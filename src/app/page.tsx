'use client';

import React, { useState } from 'react';
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';
import ResultDisplay from './components/ResultDisplay';
import './globals.css'; // ✅ Use global CSS instead of CSS module

export default function Home(): JSX.Element {
  const [bill, setBill] = useState<number | ''>('');
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number | ''>('');

  const validBill = typeof bill === 'number' && bill > 0;
  const validPeople = typeof people === 'number' && people > 0;

  const tipAmount =
    validBill && validPeople ? (bill * (tip / 100)) / people : 0;

  const total =
    validBill && validPeople ? bill / people + tipAmount : 0;

  const reset = (): void => {
    setBill('');
    setTip(0);
    setPeople('');
  };

  return (
    <main className="container">
      <h1 className="title">
        S P L I <br /> T T E R
      </h1>

      <div className="card">
        <div className="left">
          <BillInput bill={bill} setBill={setBill} />
          <TipSelector tip={tip} setTip={setTip} />
          <PeopleInput people={people} setPeople={setPeople} />
        </div>

        <ResultDisplay tipAmount={tipAmount} total={total} reset={reset} />
      </div>
    </main>
  );
}
