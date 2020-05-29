import React from 'react';
import ReactDOM from 'react-dom';
import {Root} from './views/Root'
import { Provider } from 'react-redux'
import store from './store'

import './css/app.scss'
import 'antd/dist/antd.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
)