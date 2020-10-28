import React, { Component } from 'react';
import './App.css';
import Calculator from './containers/Calculator/Calculator';


class App extends Component {

  render(){
  return (
    <div className="App">
      <h1>React Calculator</h1>

      <Calculator/>

    </div>
  );
}
}

export default App;
