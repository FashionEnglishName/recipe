import React from 'react';
import Button from '../../UI/Button/Button';

import classes from './RecipeDirection.module.css';
import icon from '../../../assets/images/icons.svg'


class RecipeDirection extends React.Component {
    render () {
        return (
            <div className={classes.RecipeDirection}>
                <h2 className={classes.Heading}>
                    How to cook it
                </h2>
                <p className={classes.RecipeDirectionText}>
                    This recipe was carefully designed and tested by
                    <span className={classes.RecipeAuthor}>{this.props.author}</span>. Please check out directions at their website.
                </p>
                
                <a className={classes.RecipeAuthorLink} href={this.props.link} target="_blank" rel="noopener noreferrer">
                    <Button classList={["ButtonSmall"]}>
                        <span>Directions</span>
                        <svg className={classes.SearchIcon}>
                            <use href={icon + "#icon-triangle-right"}></use>
                        </svg>
                    </Button>
                </a>
            </div>
        )
    }
}

export default RecipeDirection;