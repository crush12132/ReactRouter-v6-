import React from 'react'
import {useResolvedPath} from 'react-router-dom'
/**
  useResolvedPath
  -作用：给定一个url值，解析其中的：path,search,hash值
 */
export default function News() {
    //{pathname: "/user", search: "?id=001&name=tom", hash: "#qws"}
    console.log('useResolvedPath',useResolvedPath('/user?id=001&name=tom#qws'))
    return (
        <div>
            <div>new 1</div>
            <div>new 2</div>
            <div>new 3</div>
        </div>
    )
}
