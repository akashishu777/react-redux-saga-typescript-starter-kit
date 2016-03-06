import { COUNTER_INCREASE, COUNTER_DECREASE } from '../constants';

export function increment() {
  return {
    type: COUNTER_INCREASE,
  };
}

export function decrement() {
  return {
    type: COUNTER_DECREASE,
  };
}
