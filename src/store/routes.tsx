import * as React from 'react'

import { IndexRoute, Route } from 'react-router'
import { HomePage } from '../containers/HomePage'
import CounterPage from '../containers/CounterPage'

export default (
  <Route path='/'>
    <IndexRoute component={ HomePage }/>
    <Route path='counter' component={ CounterPage }/>
  </Route>
);
