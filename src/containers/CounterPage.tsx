import * as React from 'react'
import { connect } from 'react-redux'

import { Counter } from 'components/Counter/Counter'
import { counterObjectSelector } from 'selectors/counter'

interface ICounterPage {
  count: number
}

class CounterPage extends React.Component<ICounterPage, {}> {

  public render(): React.ReactElement<{}> {
    const handle = () => console.log('action')

    return (
      <Counter count={ this.props.count } onIncrease={ handle } onDecrease={ handle } />
    );
  }
}

export default connect(counterObjectSelector)(CounterPage)
