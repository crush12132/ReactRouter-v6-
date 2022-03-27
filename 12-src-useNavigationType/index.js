import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './component/app'
import './index.css'
ReactDOM.render(
    // App处于路由组件上下文中
    <div>
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </div>

    , document.getElementById('root'))