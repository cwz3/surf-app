import React, { useState }from 'react';
import Wave from './Wave';
import About from './About';
import Weather from './Weather';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav from './Nav';

function App() {
  return (
    <Router>
    <div className="app">
      <Nav />
      <Switch> 
        
        <Route path="/weather" exact component={Weather} />
        <Route path="/about" component={About} />
        <Route path="/" component={Wave} />
        
      </Switch>
    </div>
      
    </Router>
        );
        
}

export default App;
