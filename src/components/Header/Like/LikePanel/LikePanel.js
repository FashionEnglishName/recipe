import React from 'react';

import classes from './LikePanel.module.css';

class LikePanel extends React.Component {
    render() {
        const classList = [];
        classList.push(classes.LikePanel);
        if(this.props.show) classList.push(classes.Show);

        return (
            <div 
                className={classList.join(' ')} 
            >

            </div>
        );
    }
}

export default LikePanel;