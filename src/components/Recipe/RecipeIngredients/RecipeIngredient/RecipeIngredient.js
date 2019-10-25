import React, { Component } from "react";

import classes from "./RecipeIngredient.module.css";
import icon from "../../../../assets/images/icons.svg";

class RecipeIngredient extends Component {
    render () {
        const ingredientLine = this.props.line.split(' ');
        const number = ingredientLine.shift();

        return (
            <li className={classes.RecipeItem}>
                <svg className={classes.RecipeIcon}>
                    <use href={icon + '#icon-check'}></use>
                </svg>
                <div className={classes.RecipeCount}>{number}</div>
                <div className={classes.RecipeIngredient}>
                    {ingredientLine.join(' ')}
                    {/* <span className={classes.RecipeUnit}>g </span>
                    pasta */}
                </div>
            </li>
        )
        
    }
}

export default RecipeIngredient;