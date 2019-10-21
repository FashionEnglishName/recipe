import React from 'react';
import SVG from '../../../../assets/images/icons.svg'
import classes from './LikeIcon.module.css';

const LikeIcon = (props) => {
    return (
        <svg className={classes.LikeIcon}>
            <use href={SVG + "#icon-heart"}></use>
        </svg>
    )
}

export default LikeIcon;