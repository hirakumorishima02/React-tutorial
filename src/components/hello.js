import React, { Component } from 'react';

const Hello = (props) => {
    const { greet, name } = props.data; //分割代入
    return (
        // returnで返す要素は1くくりにしなければいけない
        <div>
            <p>{greet}, everyone!</p>
            <p>My name is {name}.</p>
        </div>
    )
}
export default Hello;