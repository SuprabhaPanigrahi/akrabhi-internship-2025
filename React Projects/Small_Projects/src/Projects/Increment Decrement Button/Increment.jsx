import React, { useState } from 'react';
import './Increment.css';

export const Increment = () => {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(0);

    const handleButtonClickOnIncrement = () => {
        setCount(count + step);
    }
    const handleButtonClickOnDecrement = () => {
        setCount(count - step);
    }
    const handleButtonClickOnReset = () => {
        setCount(0);
    }
    const handleStep = (event) => {
        setStep(Number(event.target.value));
    }

    // const buttonStyle={
    //     backgroundColor:"green",
    //     borderRadius:"5px",
    //     color:"white"
    // };

  return (
  <div className="counter-app">
    <div className="counter-container">
      <h1 className="count-display">{count}</h1>
      <label htmlFor="step" className="labelStep"><b>Step :</b></label>
      <input type="number" id= "step" className="step" onChange={handleStep} />
      <div className="button-row">
        <button className="buttonStyle increment" disabled={count>=100} onClick={handleButtonClickOnIncrement}>Increment</button>
        <button className="buttonStyle decrement" disabled={count<=0} onClick={handleButtonClickOnDecrement}>Decrement</button>
        <button className="buttonStyle reset" onClick={handleButtonClickOnReset}>Reset</button>
        
      </div>
    </div>
  </div>
);
};