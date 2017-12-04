import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

//HOC authenticator.
export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      if  (this.props.loggedIn) {
        return <ComposedComponent {...this.props} />;
      }
      else {
        //return <h2>YOU SANK MY BATTLESHIP (404)</h2>;
        return <Redirect to={{
          pathname: '/',
          state: {
            msg: 'You must log in to see resources'
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
  return connect(mapStateToProps)(Authentication);
}
