import React, { Component } from 'react';
import {Outlet} from 'react-router-dom'
import MyNavlink from '../component/myNavlink'
class Home extends Component {
    render() {
        return (
            <div>
              <h2>我是home组件</h2>
              <div>
                <ul className="nav nav-tabls">
                    <li>
                        {/* v6版本不需要带父级路由路径 */}
                        <MyNavlink className="list-group-item" to='messages'>Messages</MyNavlink>
                    </li>
                    <li>
                        <MyNavlink className="list-group-item" to='news'>News</MyNavlink>
                    </li>
                </ul>
                 {/* 用于指定路由组件呈现的位置 */}
                    <Outlet/>
              </div>
          </div>
        );
    }
}

export default Home;
