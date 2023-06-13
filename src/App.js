import React, { useState } from 'react';
import logo from './logow.png'
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [count, setCount] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
    setError('');
  };

  const handleCountChange = (event) => {
    setCount(event.target.value);
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Validate inputs
    if (!text || !count) {
      setError('Please enter both a string and a number');
      return;
    }
  
    if (isNaN(count) || count <= 0) {
      setError('Please enter a valid positive number');
      return;
    }
  
    // Generate repeated string with spaces
    const repeatedString = (text + ' ').repeat(Number(count)).trim();
  
    // Update result
    setResult(repeatedString);
  
    // Clear inputs
    setText('');
    setCount('');
  };
  

  return (
    <div className="container">
      <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
      <h1 className="title">String Repeater</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text-input" className="label">
            String:
          </label>
          <input
            type="text"
            id="text-input"
            value={text}
            onChange={handleTextChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="count-input" className="label">
            Number:
          </label>
          <input
            type="number"
            id="count-input"
            value={count}
            onChange={handleCountChange}
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {result && (
        <div className="result-container">
          <h2 className="result-title">Result:</h2>
          <p className="result">{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
