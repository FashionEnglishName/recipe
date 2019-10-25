import React from 'react';
import classes from '../SkeletonGlobalStyle.module.css';

class Rectangle extends React.Component {
    render () {
        return (
            <div 
                className={classes.SkeletonObject}
                style={{width: this.props.width, height: this.props.height, borderRadius: this.props.borderRadius ? this.props.borderRadius : 0}}
            >
            </div>
        )
    };
}

export default Rectangle;