import React from 'react';
import ReactDOM from 'react-dom/client';
import ResetStyles from 'assets/styles/reset';
import App from './App';
import rootReducer from 'reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(rootReducer);
//configurestore -> redux toolkit

const root = ReactDOM.createRoot(document.getElementById('root'));

// 라우팅 
// npm install react-router-dom
root.render(
  <React.StrictMode>
    <ResetStyles />
    {/* Provider 설정 */}
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>
);
