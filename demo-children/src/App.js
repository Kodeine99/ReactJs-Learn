import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Heading" >
          Demo children prop.
        </Accordion>
      </div>
    );
  }
}
export default App;
