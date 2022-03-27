import React, { Component, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'


function Messages() {
    const navigate = useNavigate()
    let [messages] = useState([
        { id: 1, title: 'message-01' },
        { id: 2, title: 'message-02' },
        { id: 3, title: 'message-03' },
    ])
    /**
     * 通过useNavigate()返回的参数navigate是一个函数，
     * 第一个参数为跳转的路径，第二个参数为option配置对象，目前只支持两个属性
     * 如果携带params和search参数，只支持在第一个参数进行拼接
     *  -params参数  `detail/${item.id}/${item.title}`
     *  -search参数  `detail?id=${item.id}&title=${item.title}`
     *  而携带state，直接在第二个参数进行配置即可
     */
    function handleCheck(item) {
        navigate('detail', {
            replace: false,
            state: {
                id: item.id,
                title: item.title
            }
        })
    }

    return (
        <div>
            <ul>
                {
                    messages.map((item, index) => {

                        return (
                            <li key={index}>
                                {/* 携带state参数，不需要在定规则的时候占位 */}
                                <Link to='detail' state={{
                                    id: item.id,
                                    title: item.title
                                }}>{item.title}</Link>
                                &nbsp;&nbsp;&nbsp;
                                <button onClick={() => handleCheck(item)}>查看详情</button>

                            </li>
                        )

                    })
                }
            </ul>

            <Outlet />
        </div>
    );

}

export default Messages;
