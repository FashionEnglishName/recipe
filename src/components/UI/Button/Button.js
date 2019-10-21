import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    let classList = [];
    
    for(let cl of props.classList) {
        console.log(cl);
        if(classes[cl]) classList.push(classes[cl]);
    }

    return (
        <button className={classList.join(' ')}>{props.children}</button>
    );
}

export default button;