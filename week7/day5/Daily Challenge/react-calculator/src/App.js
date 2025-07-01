import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers.");
      return;
    }

    let res = 0;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : "Cannot divide by 0";
        break;
      default:
        res = "Invalid operation";
    }

    setResult(res);
  };

  return (
    <div className="app">
      <div className="calculator">
        <h1>React Calculator</h1>
        <div className="inputs">
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            placeholder="First number"
          />
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            placeholder="Second number"
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="+">Addition</option>
            <option value="-">Subtraction</option>
            <option value="*">Multiplication</option>
            <option value="/">Division</option>
          </select>
          <button onClick={calculate}>Calculate</button>
        </div>
        {result !== null && (
          <h2 className="result">Result: {result}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
