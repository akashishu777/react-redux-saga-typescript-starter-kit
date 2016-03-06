import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import logger from './logger';
import rootReducer from '../reducers';

// webpack-hot-loader sets some extra attributes on node's `module` if that
// module has been hot-loaded in the browser.
interface IHotNodeModule extends NodeModule {
  hot: { accept: Function };
};

// This global is used to turn on redux dev tools when in dev mode.
declare let __DEV__: boolean;
declare let module: IHotNodeModule;

function configureStore(initialState = {}, history) {
  const store = compose(
    __DEV__
      ? applyMiddleware(routerMiddleware(history), logger)
      : applyMiddleware(routerMiddleware(history))
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}


export default configureStore;
