import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Card
          name="Rainbow"
          description="This is a rainbow full of colors"
          attack={99}
          health={99}
        />
      </div>
    );
  }
}

export default App;
