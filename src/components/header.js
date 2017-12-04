import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {loginAction} from '../actions';

class Header extends Component {

 authButton() {
   const buttonText = this.props.loggedIn ? "Log Out" : "Sign In";
   return <div><button onClick={this.props.loginAction}>{buttonText}</button></div>;
 }
 render() {
    const msgbox = this.props.msg && !this.props.loggedIn ?
      <div className=''>{this.props.msg}</div> :
      '';
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        <nav >
          <ul className='nav nav-tab'>
            <li ><Link to='/'>Home</Link></li>
            <li ><Link to='/resources'>Resources</Link></li>
            <li >{this.authButton()}</li>
          </ul>
        </nav>
        {msgbox}
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  };
};
export default withRouter(connect(mapStateToProps, {loginAction})(Header));
