import React from 'react';

import classes from './RecipeDetail.module.css';
import icon from '../../../assets/images/icons.svg';

import * as LoveList from '../../../utils/loveList';
import { connect } from 'react-redux';

class RecipeDetail extends React.Component {
    state = {
        recipeString: `${this.props.recipe.uri}@@${this.props.recipe.label}@@${this.props.recipe.source}@@${this.props.recipe.image}`
    }

    loveButtonClickHandler = () => {
        if(LoveList.contains(this.state.recipeString)) {
            LoveList.remove(this.props.recipe.uri);
         } else {
            LoveList.add(this.props.recipe.uri, this.props.recipe.label, this.props.recipe.source, this.props.recipe.image);
         }
        this.forceUpdate();
    }

    render () {
        return (
            <div className={classes.RecipeDetail}>
                <div className={classes.RecipeInfo}>
                    <svg className={classes.RecipeInfoIcon}>
                        <use href={icon + "#icon-stopwatch"}></use>
                    </svg>
                    <span className={classes.RecipeInfoData}>{this.props.recipe.totalTime === 0 ? '-' : this.props.recipe.totalTime}</span>
                    <span>minutes</span>
                </div>

                <div className={classes.RecipeInfo}>
                    <svg className={classes.RecipeInfoIcon}>
                        <use href={icon + "#icon-man"}></use>
                    </svg>
                    <span className={classes.RecipeInfoData}>{this.props.recipe.yield}</span>
                    <span>servings</span>
                </div>

                
                
                <button className={classes.RecipeLove} onClick={this.loveButtonClickHandler}>
                    {LoveList.contains(this.state.recipeString) ? 
                        <svg className={classes.Loved}>
                            <use href={icon + '#icon-heart'}></use>
                        </svg>
                    :
                        <svg className={classes.Love}>
                            <use href={icon + '#icon-heart-outlined'}></use>
                        </svg>
                    }
                </button>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe.recipeInfo
    }
}

export default connect(mapStateToProps, null)(RecipeDetail);