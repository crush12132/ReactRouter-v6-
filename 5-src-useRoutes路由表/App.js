import React from 'react'
import { NavLink,useRoutes } from 'react-router-dom'
import routers from './routers/index'
/**
 * 使用useRoutes创建路由表
 * useRoutes接收数组生成路由表
 */
export default function App() {
    const element = useRoutes(routers)
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

                        <NavLink className="list-group-item " to="/about">About</NavLink>
                        <NavLink className="list-group-item " to="/home">Home</NavLink>


                    </div>
                </div>

                {/* 展示区 */}
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                         
                            {/* 注册路由 */}
                          {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
