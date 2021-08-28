import React from 'react'
import Bar from './Bar'
import { useParams } from 'react-router'
const TabOne = (prop) => {
    
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            <h1>Component {id}</h1>
            <Bar val={id}/>
        </div>
    )
}

export default TabOne
