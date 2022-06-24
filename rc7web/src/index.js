import React from 'react';
import ReactDOM from 'react-dom/client';
import ResetStyles from 'assets/styles/reset';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// 라우팅 
// npm install react-router-dom
root.render(
  <React.StrictMode>
    <ResetStyles />
    <App/>

    {/* <Home /> */}
    {/* <Profile /> */}
    {/* <MainHome /> */}

    {/* <Series /> */}
  </React.StrictMode>
);
