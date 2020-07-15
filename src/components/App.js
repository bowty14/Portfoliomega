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
      <Header />
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
          <ProjectControl />
        </Route>
      </Switch>
   </Router>
  );
}

export default App;
