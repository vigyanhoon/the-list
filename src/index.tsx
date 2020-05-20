import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root'
import Dashboard from './Dashobard'

import '../css/app.scss'
import './App.css';

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