import React from 'react';
import ReactDOM from 'react-dom/client';
// 导入浏览器路由组件
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 将整个项目在浏览器路由组件中进行包裹，这样就可以进行全局使用。 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);
reportWebVitals();
