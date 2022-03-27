import React from 'react'
import {useLocation} from 'react-router-dom'

export default function MessageDetail() {
  //使用state进行传参，对useLocation返回的对象进行解构赋值即可，同时不需要占位
    const {state:{id,title}} = useLocation()
    console.log('---',id,title)
    return (
      <>

       <ul>
           <li>id:{id}</li>
           <li>title:{title}</li>
       </ul>
      </>
    )
}
