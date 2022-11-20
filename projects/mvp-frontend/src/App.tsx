import React from 'react';
import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click <b>Get Data!</b> to show data from backend on the console.
        </p>

        <div>
          <Button
            variant="contained"
            onClick={() => {
              fetch('http://localhost:3001/', {
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json',
                },
              })
                .then((response) => response.json())
                .then((data) => console.log(data));
            }}
          >
            Get Data!
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
