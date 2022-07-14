import React from 'react';
import ReactDOM from 'react-dom/client';
import ResetStyles from 'assets/styles/reset';
import rootReducer from 'store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ResetStyles />
    {/* Provider 설정 */}
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>
);
