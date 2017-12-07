import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {loginAction} from '../actions';

class Header extends Component {

 authButton() {
   const buttonText = this.props.loggedIn && this.props.loggedIn.authed ? "Log Out" : "Sign In";
   return (<div>
             <button
                onClick={this.props.loginAction}
                className='btn nav-btn btn-link navbar-inverse'>
                  {buttonText}
             </button>
          </div>
        );
 }
 render() {
    const msgbox = this.props.msg && !this.props.loggedIn ?
      <div className=''>{this.props.msg}</div> :
      '';
    return (
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
        <nav className='nav navbar-inverse'>
          <ul className='nav nav-pills'>
            <li role='presentation' ><Link role='button' to='/'>Home</Link></li>
            <li role='presentation' ><Link role='button' to='/resources' >Resources</Link></li>
            <li  role='presentation'>{this.authButton()}</li>
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
