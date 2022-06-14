import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassComponent from './ClassComponent';
import Home from './views/home/home'
import Profile from './views/profile/profile';
const root = ReactDOM.createRoot(document.getElementById('root'));

const onRemove = () => {
  ClassComponent = null
};

root.render(
  // 어떤 컴포넌트를 넣을지
  <React.StrictMode>
    {/* <Home /> */}
    <Profile />
    
  </React.StrictMode>
);
