import React, { Component } from 'react';
import {useRoutes} from "react-router-dom"
import elements from '../routes/index'
import MyNavlink from './myNavlink'
import Header from './header'
function App (){
    const routes = useRoutes(elements)
    
        return (
            <div>
                <div className="row">
                    <Header/>
                </div>
                <div className='row'>

                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavlink className="list-group-item"  to='/about'>About</MyNavlink>
                            {/* 子级路由匹配，父级路由失去高亮 添加end属性 */}
                            <MyNavlink className="list-group-item" end to='/home'>Home</MyNavlink>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                               {routes}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default App;
