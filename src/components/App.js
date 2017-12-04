import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';

import Header from './header';
import Resources from './resources';
import Authenticator from './require-authentication';

const HomePage = (props) => {
  return (
    <div className='home-page'>
      <h3>Home Sweet Home, Baby!</h3>
    </div>
  );
}

const AuthComponents =  Authenticator(Resources);

class App extends Component {
  render() {
    let msg;
    if (this.props.location &&
        this.props.location.state &&
        this.props.location.state.msg) {
      msg = this.props.location.state.msg;
    }
    return (
        <div className="App container">
          <Header msg={msg}/>
          <Switch>
             <Route path="/resources" component={AuthComponents} />
             <Route path="/" component={HomePage} />
          </Switch>
        </div>
    );
  }
}

export default withRouter(App);
