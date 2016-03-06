import * as React from 'react'

import { IndexRoute, Route } from 'react-router'
import { HomePage } from '../containers/HomePage'
import { AboutPage } from '../containers/AboutPage'

export default (
  <Route path='/'>
    <IndexRoute component={ HomePage }/>
    <Route path='/about' component={ AboutPage }/>
  </Route>
);
