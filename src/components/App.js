import React, { Component } from 'react';
import '../index.css';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Nav from './Nav';

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <Nav/>
          <Route exact path="/battle" component={Battle}/>
          <Route exact path="/" component={Home}/>
          <Route path="/popular" component={Popular}/>
      </div>
        </Router>
    );
  }
}


export default App;
