import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';

function setAuthMessage() {
  console.log('auth setter called');
  return 'oops';
}

//HOC authenticator.
export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      if  (this.props.loggedIn.authed) {
        return <ComposedComponent {...this.props} />;
      }
      else {
        //return <h2>YOU SANK MY BATTLESHIP (404)</h2>;
        return <Redirect to={{
          pathname: '/',
          state: {
            msg: setAuthMessage()
          }
        }} />;
      }
    }
  }

  //Make the wrapped component auth aware.
  const mapStateToProps = (state) => {
    return {
      loggedIn: state.loggedIn
    };
  };
  // return our class closure.
  return withRouter(connect(mapStateToProps)(Authentication));
}
