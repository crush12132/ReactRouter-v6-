import React, { Component,useState } from 'react';
import {Link,Route,Routes,Outlet} from 'react-router-dom'

function Messages(){
    let [messages] = useState( [
        {id:1, title:'message-01'},
        {id:2, title:'message-02'},
        {id:3, title:'message-03'},
    ])
   
   
    const handleMessagePush=(id,title)=>{
       
        this.props.history.push(`/home/messages/messageDetail/${id}/${title}`)
    }
    const handleMessageReplace=(id,title)=>{
        this.props.history.replace(`/home/messages/messageDetail/${id}/${title}`)
    }
    const forward=()=>{
       
        this.props.history.goForward()
    }
    const forback=()=>{
        this.props.history.goBack()
    }

       
        return (
            <div>
                <ul>
                    {
                        messages.map((item,index)=>{
                           
                            return(
                                <li key={index}>
                                    {/* 携带params参数，需要在定规则的时候进行占位 */}
                                    <Link to={`detail/${item.id}/${item.title}`}>{item.title}</Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={()=>handleMessagePush(item.id,item.title)}>push()查看</button>
                                    <button onClick={()=>handleMessageReplace(item.id,item.title)}>replace()查看</button>
                                </li>
                            )
                            
                        })
                    }
                </ul>
                <p>
                    <button onClick={forward}>前进</button>
                    <button onClick={forback}>后退</button>
                </p>
                <Outlet/>
            </div>
        );
    
}

export default Messages;
