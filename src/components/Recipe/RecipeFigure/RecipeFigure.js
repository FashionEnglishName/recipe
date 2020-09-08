import React from 'react';

import classes from './RecipeFigure.module.css';

class RecipeFigure extends React.Component {
    render () {
        return (
            <figure className={classes.RecipeFigure}>
                <img src={this.props.image} alt={this.props.title}/>
                <h1 className={classes.RecipeTitle}>
                    <span>{this.props.title}</span>
                </h1>
            </figure>
        )
    }
}

export default RecipeFigure;