import React, { Component } from 'react';

class News extends Component {
    state={
        newsArr:[
            'new-01',
            'new-02',
            'new-03',
        ]
    }
   
    render() {
        let {newsArr} = this.state
        return (
            <div>
                <ul>
                    {
                        newsArr.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default News;
