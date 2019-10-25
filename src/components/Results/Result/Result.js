import React from 'react';

import classes from './Result.module.css';


class Result extends React.Component {
    render () {
        const classList = [classes.ResultLink];
        if(this.props.shouldHighlight) classList.push(classes.Active);
        return (
            <li>
                <span className={classList.join(' ')} onClick={this.props.clicked}>
                    <figure className={classes.ResultFigure}>
                        <img src={this.props.image} alt={this.props.title}/>
                    </figure>
                    <div>
                        <h4 className={classes.ResultName}>{this.props.title}</h4>
                        <p className={classes.ResultAuthor}>{this.props.author}</p>
                    </div>
                </span>
            </li>
        )
    }
}


export default Result;