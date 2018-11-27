import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom'; // react-router v4
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import reducers from './reducers';
import './index.css';
import App from './App';
import ProductDetail from './ProductDetail';
import ContactPage from './ContactPage';

// Initialisation des tableaux permettant de stocker les middlewares et extensions de Redux
const history = createBrowserHistory();
const enhancers = [];
const middlewares = [thunkMiddleware, routerMiddleware(history)];

// En env de dév on ajout les dev tools redux cf. https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

// Création du store Redux à partir de nos reducers, middlewares et extensions
const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers,
);

const store = createStore(reducers(history), composedEnhancers);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/p:id" component={ProductDetail} />
        <Route path="/register" component={ContactPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
