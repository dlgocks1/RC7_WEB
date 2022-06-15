import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassComponent from './ClassComponent';
import Home from './views/home/home';
import Profile from './views/profile/profile';
import Main_home from './views/main/main_home';
import Main_home_style from './views/src/styles/main_home_styles';
import home_style from './views/src/styles/home_style';
import Home_style from './views/src/styles/home_style';

const root = ReactDOM.createRoot(document.getElementById('root'));

const onRemove = () => {
  ClassComponent = null
};

root.render(
  // 어떤 컴포넌트를 넣을지
  <React.StrictMode>
    {/* <Home_style /> */}
    {/* <Home /> */}
    <Profile />
    {/* <Main_home_style /> */}
    {/* <Main_home /> */}
  </React.StrictMode>
);
