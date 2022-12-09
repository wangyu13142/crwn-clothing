import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 导入浏览器路由组件
import { BrowserRouter } from "react-router-dom";
// 导入全局上下文
import { UserProvider } from './contexts/user.context';
import { ProductsProvider } from './contexts/products.context';
import { CartContextProvider } from './contexts/cart.context';

import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 将整个项目在浏览器路由组件中进行包裹，这样就可以进行全局使用。 */}
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartContextProvider>
            <App />
          </CartContextProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
