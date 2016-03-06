import * as React from 'react'

import { IndexRoute, Route } from 'react-router'
import { Home } from '../containers/Home'

export default (
  <Route path='/'>
    <IndexRoute component={ Home }/>
  </Route>
);
