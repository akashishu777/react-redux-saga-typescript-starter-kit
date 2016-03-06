import * as React from 'react'

interface ICounterProps {
  count: number
  onIncrease: Function
  onDecrease: Function
}

export class Counter extends React.Component<ICounterProps, {}> {

  public render(): React.ReactElement<{}> {

    return (
      <div>
        <h2>Count: { this.props.count }</h2>
        <button onClick={ this.props.onIncrease.bind(this) }>Increase</button>
        <button onClick={ this.props.onDecrease.bind(this) }>Decrease</button>
      </div>
    );
  }
}
