import React,  { Component } from 'react';
// import logo from './logo.svg';
import './App.css'; 

import TrafficLight from './components/TrafficLight';
// import InputValue from './components/InputValue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TrafficLight />
      </div>
    );
  }
}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <InputValue />
//       </div>
//     )
//   }
// }

export default App;
