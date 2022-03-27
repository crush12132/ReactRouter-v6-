import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './component/app'
import './index.css'
import Demo from './component/demo'
ReactDOM.render(
    // App处于路由组件上下文中
    <div>
        <Demo />
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </div>

    , document.getElementById('root'))