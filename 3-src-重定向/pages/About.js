import React,{useState} from 'react'
import {Navigate} from 'react-router-dom'
export default function About() {
    const [num,setNum] = useState(1)
    return (
        <div>
          <p>  About组件</p>
          {num===1? <p>state为:{num}</p>:<Navigate to='/home'/>}
          <button onClick={()=>setNum(2)}>点我变num为2</button>
        </div>
    )
}
