import React from 'react'
import {useNavigate} from 'react-router-dom'
/* 
  Header为非路由组件，在v5版本通过withRouter()高阶函数包装成新的路由组件才能调用location，history和match的方法
  但在v6版本中只需要调用useNaviage()这个hooks也可以实现跳转需求

  navigate(1) 为前进一步
  navigate(-1) 为后退一步
*/
export default function Header() {
    const navigate = useNavigate()
    function forWard(){
        navigate(1)
    }
    function back(){
        navigate(-1)
    }
    return (
        <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
            <h2>
                React Router Demo
            </h2>
            <button onClick={forWard}>前进</button>
            <button onClick={back}>后退</button>
        </div>
    </div>
    )
}
