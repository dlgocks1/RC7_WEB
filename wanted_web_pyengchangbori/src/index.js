import React from 'react';
import ReactDOM from 'react-dom/client';
import rootReducer from 'store/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import 'assets/fonts/static/pretendard.css';
import 'assets/pcblicomoon.css';
import 'reset.css';

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
);
