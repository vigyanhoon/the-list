import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard'
import Header from './Header'
import CardDetails from './CardDetails'
import NoMatch from './NoMatch'
import Page from './Page'
import {
  HashRouter,
  Switch,
  Route,
  Prompt
} from "react-router-dom";

export const Root:React.FC<{}> = () => {

  const confirm = (message: any, callback: any) => {
    console.log('in confirm', window.location.href)
    callback(true)
  }

  return (
    <HashRouter getUserConfirmation={confirm}>
      <Header/>
      <Prompt message="Are you sure you want to leave?" />
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/details/:type" component={CardDetails}/>
        <Route path="/page" component={Page}/>
        <Route component={NoMatch} />
      </Switch>
    </HashRouter>
  )
}
