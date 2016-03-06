import * as React from 'react'

import { Link } from 'react-router'

export class AboutPage extends React.Component<{}, {}> {

  public render(): React.ReactElement<{}> {

    return (
      <div>
        <h1>About</h1>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </div>
    );
  }
}
