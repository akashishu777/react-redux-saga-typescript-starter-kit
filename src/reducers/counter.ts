import {
  COUNTER_INCREASE,
  COUNTER_DECREASE,
  COUNTER_ADDITION,
} from '../constants'

interface IAction {
  type: string
  payload: any
}

const ACTION_HANDLERS = {
  [COUNTER_INCREASE]: (state: number): number => state + 1,
  [COUNTER_DECREASE]: (state: number): number => state - 1,
  [COUNTER_ADDITION]: (state: number, action: {payload: number}): number => state + 1,
}

const INITIAL_STATE = 0

export default function counterReducer (state: number = INITIAL_STATE, action: IAction): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
