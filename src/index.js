import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx'
import Dashboard from './Dashobard.jsx'

import '../css/app.scss'

const routes = [
  {
    path: "/dashboard",
    component: Dashboard
  }
]

ReactDOM.render(
  <Root/>,
  document.getElementById('root')
);