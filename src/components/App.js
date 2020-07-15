import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import ProjectControl from './ProjectControl';
import Signin from './Signin';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='header'><Header /></div>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
          <div className='prjCrl'><ProjectControl /></div>
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
