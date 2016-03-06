import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Counter } from '../components/Counter/Counter'
import { counterStateSelector } from '../selectors/counter'
import * as actions from '../actions/counter'

interface ICounterPage {
  count: number
  increment: Function
  decrement: Function
}

class CounterPage extends React.Component<ICounterPage, {}> {

  public render(): React.ReactElement<{}> {
    const handle = () => console.log('action')

    return (
      <Counter
        count={ this.props.count }
        onIncrease={ this.props.increment.bind(this) }
        onDecrease={ this.props.decrement.bind(this) } />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

export default connect(counterStateSelector, mapDispatchToProps)(CounterPage)
