'use client';

import React, { JSX, useState } from 'react';
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';
import ResultDisplay from './components/ResultDisplay';
import './globals.css';

export default function Home(): JSX.Element {
  const [bill, setBill] = useState<number | ''>('');
  const [tip, setTip] = useState<number>(0);
  const [people, setPeople] = useState<number | ''>('');
  const [resetTrigger, setResetTrigger] = useState<number>(0); // 👈 added

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
    setResetTrigger(prev => prev + 1); // 👈 trigger reset for TipSelector
  };

  return (
    <main className="container">
      <h1 className="title">
        S P L I <br /> T T E R
      </h1>

      <div className="card">
        <div className="input-side">
          <BillInput bill={bill} setBill={setBill} />
          <TipSelector tip={tip} setTip={setTip} resetTrigger={resetTrigger} /> {/* 👈 pass down */}
          <PeopleInput people={people} setPeople={setPeople} />
        </div>

        <ResultDisplay tipAmount={tipAmount} total={total} reset={reset} />
      </div>
    </main>
  );
}
