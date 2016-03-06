import * as React from 'react'
import { Link } from 'react-router'

export class HomePage extends React.Component<{}, {}> {

  public render(): React.ReactElement<{}> {

    return (
      <div>
        <h1>Home</h1>
        <Link to='/counter'>Counter</Link>
      </div>
    );
  }
}
