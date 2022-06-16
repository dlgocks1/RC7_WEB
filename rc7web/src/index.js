import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/home/home';
import Profile from './views/profile/profile';
import Main from './views/main/Home';
import Main_home_style from './views/src/styles/main_home_styles';
import home_style from './views/src/styles/home_style';
import Home_style from './views/src/styles/home_style';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* <Home_style /> */}
    {/* <Home /> */}

    {/* <Profile /> */}
    
    {/* <Main_home_style /> */}
    <Main />

  </React.StrictMode>
);
