import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import reducers from './reducers';
import Authenticator from './components/require-authentication';
import Resources from './components/resources';


const AuthComponents =  Authenticator(Resources);

const HomePage = (props) => {
  console.log(window.location);
  return (
    <div className='home-page'>
      <h3>Home Sweet Home, Baby!</h3>
    </div>
  );
}


const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={HomePage} />
        <Route path="/resources" component={AuthComponents} />
      </App>
    </BrowserRouter>
  </Provider>
  ,

  document.getElementById('root')
);
