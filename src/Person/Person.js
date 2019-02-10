import React from 'react';
//import './src/App.css';

const details = (props) => {
    return (
        <div>
        <p className='Person-heading person-font'>My name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        </div>
    )
};

export default details;