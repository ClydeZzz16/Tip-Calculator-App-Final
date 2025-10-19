'use client';
import { useState } from 'react';
import BillInput from './components/BillInput';
import TipSelector from './components/TipSelector';
import PeopleInput from './components/PeopleInput';
import ResultDisplay from './components/ResultDisplay';
import styles from './styles/Splitter.module.css';

export default function Home() {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState('');

  const tipAmount = people ? (bill * (tip / 100)) / people : 0;
  const total = people ? bill / people + tipAmount : 0;

  const reset = () => {
    setBill('');
    setTip(0);
    setPeople('');
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        S P L I <br /> T T E R
      </h1>

      <div className={styles.card}>
        <div className={styles.left}>
          <BillInput bill={bill} setBill={setBill} />
          <TipSelector tip={tip} setTip={setTip} />
          <PeopleInput people={people} setPeople={setPeople} />
        </div>

        <ResultDisplay tipAmount={tipAmount} total={total} reset={reset} />
      </div>
    </main>
  );
}
