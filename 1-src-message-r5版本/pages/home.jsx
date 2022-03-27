import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import MyNavlink from '../component/myNavlink'
import Messages from './messages'
import News from './news'
class Home extends Component {
    render() {
        return (
            <div>
              <h2>我是home组件</h2>
              <div>
                <ul className="nav nav-tabls">
                    <li>
                        <MyNavlink  to='/home/messages'>Messages</MyNavlink>
                    </li>
                    <li>
                        <MyNavlink to='/home/news'>News</MyNavlink>
                    </li>
                </ul>
                <div>
                    <Switch>
                        <Route path='/home/news' component={News}/>
                        <Route path='/home/messages' component={Messages}/>                   
                    </Switch>
                </div>
              </div>
          </div>
        );
    }
}

export default Home;
