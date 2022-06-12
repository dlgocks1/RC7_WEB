import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ClassComponent from './ClassComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const onRemove = () => {
  ClassComponent = null
};

root.render(
  // 어떤 컴포넌트를 넣을지
  <React.StrictMode>
    <App name="HeaChan"/>
    <ClassComponent onRemove="onRemove"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
