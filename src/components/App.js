import React, { Component } from 'react';
import '../index.css';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Results from './Results'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
        <Router>
      <div className="App">
          <Nav/>
          <Switch>
          <Route exact path="/battle" component={Battle}/>
          <Route exact path="/" component={Home}/>
              <Route path="/battle/results" component={Results}/>
          <Route exact path="/popular" component={Popular}/>
              <Route render={function(){
                      return(
                          <p>The page you requested is Not Found!</p>
                      )}
              } />
          </Switch>
      </div>
        </Router>
    );
  }
}


export default App;
