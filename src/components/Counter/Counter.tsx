import * as React from 'react'

const classes = require('./Counter.css')

interface ICounterProps {
  count: number
  onIncrease: Function
  onDecrease: Function
}

export class Counter extends React.Component<ICounterProps, {}> {
  handleIncreaseCounter = () => {
    this.props.onIncrease()
  }

  handleDecreaseCounter = () => {
    this.props.onDecrease()
  }

  public render(): React.ReactElement<{}> {

    return (
      <div className={ classes.container }>
        <h2>Count: { this.props.count }</h2>
        <button onClick={ this.handleIncreaseCounter }>Increase</button>
        <button onClick={ this.handleDecreaseCounter }>Decrease</button>
      </div>
    );
  }
}
