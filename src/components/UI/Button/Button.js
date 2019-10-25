import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    let classList = [];
    
    for(let cl of props.classList) {
        if(classes[cl]) classList.push(classes[cl]);
    }

    return (
        <button 
            className={classList.join(' ')} 
            style={props.styles} 
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
}

export default button;