import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'


const middleware = [ thunk ];
middleware.push(createLogger());
const store = createStore(
   reducer,
   applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

ReactDOM.render((
  <Provider store={store}>
    <App> </App>
 </Provider>
 ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
