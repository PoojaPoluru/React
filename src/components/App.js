import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Popular from './Popular';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Popular/>
      </div>
    );
  }
}


export default App;
