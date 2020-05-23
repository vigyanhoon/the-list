import React from 'react';
import Login from './Login';
import {Dashboard} from './Dashobard'
import {Header} from './Header'
import {CardDetails} from './CardDetails'
import {NoMatch} from './NoMatch'
import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export const Root:React.FC<{}> = () => {
  return (
    <HashRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/details/:type" component={CardDetails}/>
        <Route component={NoMatch} />
      </Switch>
    </HashRouter>
  )
}
