import React from 'react';
import Circle from '../../UI/SkeletonView/Circle/Circle';
import RoundedRectangle from '../../UI/SkeletonView/RoundedRectangle/RoundedRectangle';

import classes from './LoadingView.module.css';

class LoadingView extends React.Component {
    render () {
        return (
            <li>
                <span className={classes.ResultLink} onClick={this.props.clicked}>
                    <div className={classes.ResultFigure}>
                        <Circle width="5.5rem" height="5.5rem"/>
                    </div>
                    <div>
                        <div className={classes.ResultName}>
                            <RoundedRectangle height="1rem" width="12rem"/>
                        </div>
                        <div className={classes.ResultAuthor}>
                            <RoundedRectangle height="1rem" width="7rem"/>
                        </div>
                    </div>
                </span>
            </li>
        )
    }
}

export default LoadingView;