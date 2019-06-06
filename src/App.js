import React from 'react';
import './App.css';
import Counter from './components/Counter';

class App extends React.Component {
    
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Aplikacja Licznika w ReactJS</h1>
        </header>
        <Counter initValue="108" value="Value Props" init="Init Props"/>
      </div>
    );
  
  }
}

export default App;
