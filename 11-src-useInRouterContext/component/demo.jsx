import React from 'react'
import {useInRouterContext} from 'react-router-dom'
export default function Demo() {
    console.log('Demo-2',useInRouterContext())//false
    
    return (
        <div>
           111 
        </div>
    )
}
