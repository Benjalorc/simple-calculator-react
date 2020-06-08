import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <input type="number" />
      <div className="left-area">
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">,</button>
        <button type="button">0</button>
        <button type="button">=</button>
      </div>
      <div className="right-area">
        <button type="button">CE</button>
        <button type="button">/</button>
        <button type="button">*</button>
        <button type="button">-</button>
        <button type="button">+</button>
      </div>
    </div>
  );
}

export default Calculator;
