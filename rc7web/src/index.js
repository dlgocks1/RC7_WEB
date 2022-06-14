import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassComponent from './ClassComponent';
import Home from './views/home/home'

const root = ReactDOM.createRoot(document.getElementById('root'));

const onRemove = () => {
  ClassComponent = null
};

root.render(
  // 어떤 컴포넌트를 넣을지
  <React.StrictMode>
    <Home />
    
    {/* <App name="HeaChan"/> */}
    {/* <ClassComponent onRemove="onRemove"/> */}
  </React.StrictMode>
);
