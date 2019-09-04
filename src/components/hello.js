import React, { Component } from 'react';

const Hello = (props) => {
    const greetings = props.data.map((greeting) => {
        return <li>{greeting}</li>
    });
    return (
        <ul>
            <li>{greetings}</li>
        </ul>
    )
}
export default Hello;