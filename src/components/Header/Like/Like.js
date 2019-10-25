import React from 'react';
import LikeField from './LikeField/LikeField';
import LikePanel from './LikePanel/LikePanel';
import LikeIcon from './LikeIcon/LikeIcon';

import classes from './Like.module.css'

class Like extends React.Component {
    state = {
        shouldPanelShow: 0
    }

    mouseEnterHandler = () => {
        this.setState({shouldPanelShow: 1});
    }

    mouseLeaveHandler = () => {
        this.setState({shouldPanelShow: 0});
    }

    render () {
        return (
            <div className={classes.Like}>
                <LikeField 
                    enter={() => this.mouseEnterHandler()}
                    leave={() => this.mouseLeaveHandler()}
                >
                    <LikeIcon />
                </LikeField>
                <LikePanel 
                    show={this.state.shouldPanelShow}
                    enter={() => this.mouseEnterHandler()}
                    leave={() => this.mouseLeaveHandler()}
                ></LikePanel>
            </div>
        )
    }
}

export default Like;