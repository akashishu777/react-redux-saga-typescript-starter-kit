import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
} from '../constants'

interface IAction {
  type: string
  payload: any
}

const ACTION_HANDLERS = {
  [COUNTER_INCREASE]: (state: number, action: {payload: number}): number => state + action.payload,
  [COUNTER_INCREASE]: (state: number, action: {payload: number}): number => state + action.payload,
}

const INITIAL_STATE = 0

export default counterReducer

export default function counterReducer (state: number = INITIAL_STATE, action: IAction): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
