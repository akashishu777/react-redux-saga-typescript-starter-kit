import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
} from '../constants'

interface IAction {
  type: string
  payload: any
}

const INITIAL_STATE = 0

function counterReducer(state = INITIAL_STATE, action?) {
  switch (action.type) {

  case COUNTER_INCREASE:
    return state + 1

  case COUNTER_DECREASE:
    return state - 1
  default:
    return state
  }
}


export default counterReducer
