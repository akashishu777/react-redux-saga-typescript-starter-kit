import * as React from 'react'

import { Counter } from 'components/Counter/Counter'

export class CounterPage extends React.Component<{}, {}> {

  public render(): React.ReactElement<{}> {
    const handle = () => console.log('action')

    return (
      <Counter count={ 1 } onIncrease={ handle } onDecrease={ handle } />
    );
  }
}
