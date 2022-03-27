import React from 'react'
import {useNavigationType} from 'react-router-dom'
/**
 * useNavigationType
 *  -作用：返回当前的导航类型（用户是如何来到这个页面的）
 * -返回值：pop,push,replace
 * -备注：pop是指在浏览器中直接打开了这个路由组件（或者刷新页面）
 */
export default function News() {
    console.log('useNavigationType',useNavigationType())
    return (
        <div>
            <div>new 1</div>
            <div>new 2</div>
            <div>new 3</div>
        </div>
    )
}
