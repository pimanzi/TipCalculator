import React, { useState } from 'react';
/* eslint-disable */
export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [tip2, setTip2] = useState(0);
  return (
    <div>
      <BillForm bill={bill} setBill={setBill} />
      <Service tip={tip} setTip={setTip}>
        <span>How did you like the service? </span>
      </Service>

      <Service tip={tip2} setTip={setTip2}>
        <span>How did your friend like the service? </span>
      </Service>
      {bill === 0 || (
        <React.Fragment>
          <BillCalc tip={tip} tip2={tip2} bill={bill} />
          <Button setTip={setTip} setTip2={setTip2} setBill={setBill} />
        </React.Fragment>
      )}
    </div>
  );
}

function BillForm({ bill, setBill }) {
  return (
    <React.Fragment>
      <h1>Calculate your total Bill</h1>
      <div className="form">
        <span>How much was the bill? </span>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        ></input>
      </div>
    </React.Fragment>
  );
}

function Service({ children, tip, setTip }) {
  return (
    <div className="form">
      {children}

      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>it was okay(5%)</option>
        <option value={10}>it was good(10%)</option>
        <option value={20}>Absolutely amazing(20%)</option>
      </select>
    </div>
  );
}

function BillCalc({ bill, tip, tip2 }) {
  return (
    <div className="pay">
      You pay{`$ ${bill + (tip + tip2) / 2}`} (${bill} + ${(tip + tip2) / 2}{' '}
      tip)
    </div>
  );
}

function Button({ setTip, setTip2, setBill }) {
  return (
    <button
      onClick={() => {
        setTip(0);
        setTip2(0);
        setBill(0);
      }}
    >
      Reset
    </button>
  );
}
