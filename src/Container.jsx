import React from 'react'
import Content from './Content'

function Container({URL, filter}) {
    return (
        <div className="container">
            <h1 className="title">CONTENTFUL</h1>
            {URL && <Content URL={URL} filter={filter}/>}    
        </div>
    )
}

export default Container
