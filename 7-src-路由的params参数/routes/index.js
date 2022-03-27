import { Navigate } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import News from '../pages/news'
import Messages from '../pages/messages'
import MessageDetail from '../pages/message-detail'
export default [
    {
        path:"/home",
        element:<Home/>,
        children:[
            {
                path:'news',
                element:<News/>
            },
            {
                path:'messages',
                element:<Messages/>,
                children:[
                    {
                        path:'detail/:id/:title',
                        element:<MessageDetail/>
                    }
                ]
            },
        ]
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/",
        element:<Navigate to="/about" />
    },
]