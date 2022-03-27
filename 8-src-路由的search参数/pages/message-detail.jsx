import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'
// 使用useSearchParams获取父组件的数据
export default function MessageDetail() {
    const [search,setSearch] = useSearchParams()
    const id = search.get('id')
    const title = search.get('title')
    const s = useLocation()
    console.log('useLocation',s)
    
    return (
       <ul>
           <li>id:{id}</li>
           <li>title:{title}</li>
       </ul>
    )
}
