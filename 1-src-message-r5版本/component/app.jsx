import React, { Component } from 'react';
import {Switch,Route, Redirect } from "react-router-dom"

import About from '../pages/about'
import Home from '../pages/home'
import MyNavlink from './myNavlink'

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>
                                React Router Demo
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='row'>

                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <MyNavlink className="list-group-item"  to='/about'>About</MyNavlink>
                            <MyNavlink className="list-group-item"  to='/home'>Home</MyNavlink>
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    <Redirect to='/about' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
