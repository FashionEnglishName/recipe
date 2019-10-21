import React from 'react';

import classes from './LikeField.module.css';

class LikeField extends React.Component {
    
    render () {
        return (
            <div 
                className={classes.LikeField} 
                onMouseEnter={this.props.enter}
                onMouseLeave={this.props.leave}
            >
                {this.props.children}
            </div>
        )
    }
}

export default LikeField;