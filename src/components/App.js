import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Header from './header';

class App extends Component {
  render() {
    return (
        <div className="App container">
          <Header />
          {this.props.children}
        </div>
    );
  }
}

export default withRouter(App);
