import React, { Component } from 'react';

const Hello = (props) => {
<<<<<<< HEAD
    const greetings = props.data.map((greeting) => {
        return <li>{greeting}</li>
    });
    return (
        <ul>
            <li>{greetings}</li>
        </ul>
=======
    const { greet, name } = props.data; //分割代入
    return (
        // returnで返す要素は1くくりにしなければいけない
        <div>
            <p>{greet}, everyone!</p>
            <p>My name is {name}.</p>
        </div>
>>>>>>> feature/#1_Add_Lifecycle_Method
    )
}
export default Hello;