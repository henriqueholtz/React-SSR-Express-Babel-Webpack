import React, { useCallback } from 'react'

export function App({comments}) {

    function onChange(e)  {
        console.log('onChange', e)
    }//, [comments])

    return <div>
        <h1>My first component from server </h1>
        <h3>Comments List</h3>
        <ul>
            {comments.map(com => (
                <li key={com.id} id={com.id}>
                    <span>{com.author} - {com.text}</span>
                    <button type="text" onClick={() => onChange(com.id)} >Remove</button>
                </li>
            ))}
        </ul>
    </div>
} 