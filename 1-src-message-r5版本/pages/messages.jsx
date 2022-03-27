import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom'
import MessageDetail  from './message-detail';

class Messages extends Component {
    state={
        messagesArr:[
            // {id:1, title:'message-01'},
            // {id:2, title:'message-02'},
            // {id:3, title:'message-03'},
        ]
    }
    componentDidMount() {
        setTimeout(() =>{
            let messagesArr = [
                {id:1, title:'message-01'},
                {id:2, title:'message-02'},
                {id:3, title:'message-03'},
            ]
          this.setState({messagesArr})  
        },1000)
    }
    handleMessagePush=(id,title)=>{
       
        this.props.history.push(`/home/messages/messageDetail/${id}/${title}`)
    }
    handleMessageReplace=(id,title)=>{
        this.props.history.replace(`/home/messages/messageDetail/${id}/${title}`)
    }
    forward=()=>{
       
        this.props.history.goForward()
    }
    forback=()=>{
        this.props.history.goBack()
    }
    render() {
        let {messagesArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messagesArr.map((item,index)=>{
                           
                            return(
                                <li key={index}>
                                    
                                    <Link to={`/home/messages/messageDetail/${item.id}/${item.title}`}>{item.title}</Link>
                                    &nbsp;&nbsp;&nbsp;
                                    <button onClick={()=>this.handleMessagePush(item.id,item.title)}>push()查看</button>
                                    <button onClick={()=>this.handleMessageReplace(item.id,item.title)}>replace()查看</button>
                                </li>
                            )
                            
                        })
                    }
                </ul>
                <p>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.forback}>后退</button>
                </p>
                <Route path='/home/messages/messageDetail/:id/:title' component={MessageDetail}/>
            </div>
        );
    }
}

export default Messages;
