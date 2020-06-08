import React, {createRef} from 'react';
import './Calculator.css';

class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.numberInput = createRef(0);
    this.lastInput = createRef();
    this.numeros = [
      "7", "8", "9",
      "4", "5", "6",
      "1", "2", "3",
      ".", "0",
    ]
    this.addToLast = this.addToLast.bind(this);
  }

  addToLast(e){
    let value = e.target.value;
    if(this.lastInput.current === "."){
      value = this.numberInput.current.value.length === 0 ? ("0."+value) : ("."+value);
    }
    else if(value === "."){
      value = "";
    }
    this.numberInput.current.value += value;
    this.lastInput.current = e.target.value;
  }

  render(){
    return (
      <div className="calculator">
        <input ref={this.numberInput} type="number" />
        <div className="left-area">
          {
            this.numeros.map((num, index)=>{
              return <button type="button" key={num} value={num} onClick={this.addToLast}>{num}</button>
            })
          }
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

}

export default Calculator;
