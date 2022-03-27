import React from 'react'
import { NavLink, Routes, Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
/**
 * 页面显示：No routes matched location "/" 
 * 原因是：重定向
 * Navigate
 * 1.作用：只要<Navigate>组件被渲染，就会修改路径，切换视图
 * 2.replace属性用于控制跳转模式（push或replace，默认是push）
 */
export default function App() {
    return (
        <div>
            <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
            </div>

            {/* 导航区 */}
            {/* a标签实现页面的跳转，路由标签实现页面的切换  */}
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/*原生js写法
                            <a className="list-group-item active" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */
                        }

                        {/* 在React中靠路由链接实现切换组件-编写路由链接-一级路由 */}
                        <NavLink className="list-group-item " to="/about">About</NavLink>
                        <NavLink className="list-group-item " to="/home">Home</NavLink>

                    </div>
                </div>

                {/* 展示区 */}
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* <h3>我是About的内容</h3> */}
                            {/* 注册路由 */}
                            <Routes>
                                <Route path="/home" element={<Home/>} />
                                <Route path="/about" element={<About/>} />
                                <Route path="/" element={<Navigate to='/about'/>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
