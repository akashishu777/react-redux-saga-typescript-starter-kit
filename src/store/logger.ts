import * as createLogger from 'redux-logger'

const logger = createLogger({
  collapsed: true,
  stateTransformer: (state) => {
    // return immutableToJS(state);
    return state
  },
  predicate: (getState, action) => {
    const type = action.type
    return type !== 'redux-form/BLUR' &&
      type !== 'redux-form/CHANGE' &&
      type !== 'redux-form/FOCUS' &&
      type !== 'redux-form/TOUCH'
  },
});


export default logger;
