import React, { Component } from 'react';

const Hello = (props) => {
    const greetings = props.data.map((greeting) => {
        return <li>{greeting}</li>
    });
    return (
        <ul>
            {greetings}
        </ul>
    )
}
export default Hello;