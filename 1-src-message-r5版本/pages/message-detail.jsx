import React from 'react'

export default function MessageDetail(props) {
  
    let messageArr = [
        {id:1, title:'message-01',content: 'Message------1'},
        {id:2, title:'message-02',content: 'Message------2'},
        {id:3, title:'message-03',content: 'Message------3'},
    ]

    let params = props.match.params
    console.log(params)
    messageArr = messageArr.find(item=>item.id == params.id)
    console.log(111,messageArr)
    
    return (
       <ul>
           <li>id:{messageArr.id}</li>
           <li>title:{messageArr.title}</li>
           <li>content:{messageArr.content}</li>
       </ul>
    )
}
