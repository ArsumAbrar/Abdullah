import React from 'react'
import Bar from './Bar'
import { useParams } from 'react-router'

const TabThree = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Component {id}</h1>
            <Bar val={id}/>
        </div>
    )
}

export default TabThree
