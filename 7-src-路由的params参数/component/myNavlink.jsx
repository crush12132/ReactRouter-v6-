import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

class MyNavlink extends Component {
    render() {
        return (
            // 将外部传入所有属性传递给NavLink标签
            <NavLink className='activeClass' {...this.props}/>
        );
    }
}

export default MyNavlink;
