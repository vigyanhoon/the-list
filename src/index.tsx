import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './views/Root'
import { Provider } from 'react-redux'
import store from './store'

import './css/app.scss'
import 'antd/dist/antd.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons/faTimesCircle'
library.add(faBars)
library.add(faTimesCircle)

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
)