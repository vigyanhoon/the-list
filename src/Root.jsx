import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx'
import Dashboard from './Dashobard.jsx'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function Root() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  )
}
