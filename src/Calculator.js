import React, {createRef} from 'react';
import './Calculator.css';

class Calculator extends React.Component {

  constructor(props){
    super(props);
    this.numberInput = createRef();
    this.lastInput = "";
    this.lastOperator = null;
    this.cuenta = null;
    this.numeros = [
      "7", "8", "9",
      "4", "5", "6",
      "1", "2", "3",
      ".", "0",
    ];
    this.addToLast = this.addToLast.bind(this);
  }

  addToLast(e){
    let value = e.target.value;
    if(this.lastInput === "."){
      value = this.numberInput.current.value.length === 0 ? ("0."+value) : ("."+value);
    }
    else if(value === "."){
      value = "";
    }
    this.numberInput.current.value += value;
    this.lastInput = e.target.value;
  }
  operate(operador){

    let val = parseFloat(this.numberInput.current.value);
    if(!val) return false;

    if(this.cuenta === null || this.lastOperator === null){

      this.cuenta = val;
    }
    else{

      switch(this.lastOperator){
        case "divide":
          this.cuenta /= val;
        break;
        case "multiply":
          this.cuenta *= val;
        break;
        case "substract":
          this.cuenta -= val;
        break;
        case "add":
          this.cuenta += val;
        break;
        default:
        break;
      }
    }
    this.numberInput.current.value = operador ? "" : this.cuenta;
    this.lastOperator = operador;
  }

  clearInput(){
    this.numberInput.current.value = "";
    this.lastOperator = null;
    this.cuenta = 0;
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
          <button type="button" onClick={()=> this.operate(null) }>=</button>
        </div>
        <div className="right-area">
          <button type="button" onClick={()=> this.clearInput() }>CE</button>
          <button type="button" onClick={()=> this.operate("divide") }>/</button>
          <button type="button" onClick={()=> this.operate("multiply") }>*</button>
          <button type="button" onClick={()=> this.operate("substract") }>-</button>
          <button type="button" onClick={()=> this.operate("add") }>+</button>
        </div>
      </div>
    );
  }

}

export default Calculator;
