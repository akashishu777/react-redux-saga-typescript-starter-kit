import { createSelector } from 'reselect'

export const counterSelector = (state) => state.counter

export const counterStateSelector = createSelector(
  counterSelector, (counter) => {
    return {
      count: counter,
    }
  }
)
