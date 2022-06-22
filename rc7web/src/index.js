import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home/Home';
import Profile from './views/profile/Profile';
import MainHome from './views/main/home/MainHome';
import ResetStyles from './views/src/styles/reset';
import Series from './views/main/series/Series';
import ErrorBoundary from './ErrorBoundary';
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
