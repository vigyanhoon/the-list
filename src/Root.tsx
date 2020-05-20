import React from 'react';
import Login from './Login';
import Dashboard from './Dashobard'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const Root:React.FC<{}> = () => {
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

export default Root
