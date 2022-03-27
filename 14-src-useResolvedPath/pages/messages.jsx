import React, { Component,useState } from 'react';
import {Link,Outlet,useNavigate,useInRouterContext} from 'react-router-dom'

function Messages(){

    const navigate = useNavigate()
    let [messages] = useState( [
        {id:1, title:'message-01'},
        {id:2, title:'message-02'},
        {id:3, title:'message-03'},
    ])
 
    function handleCheck (item) {
        navigate('detail',{
            replace:false,
            state:{
                id:item.id,
                title:item.title
            }
        })
    }
  

       
        return (
            <div>
                <ul>
                    {
                        messages.map((item,index)=>{
                           
                            return(
                                <li key={index}>
                                    {/* 携带state参数，不需要在定规则的时候占位 */}
                                    <Link to='detail' state={{
                                        id:item.id,
                                        title:item.title
                                    }}>{item.title}</Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={()=>handleCheck(item)}>查看详情</button>
                                   
                                </li>
                            )
                            
                        })
                    }
                </ul>
               
                <Outlet/>
            </div>
        );
    
}

export default Messages;
