import React from 'react'
import {useParams,useMatch} from 'react-router-dom'
// 使用useParams获取父组件的数据
export default function MessageDetail() {
    let messageArr = useParams()
    let a = useMatch('/home/messages/detail/:id/:title')
    console.log(messageArr)
    console.log(a)
    
    
    return (
       <ul>
           <li>id:{messageArr.id}</li>
           <li>title:{messageArr.title}</li>
           <li>content:{messageArr.content}</li>
       </ul>
    )
}
