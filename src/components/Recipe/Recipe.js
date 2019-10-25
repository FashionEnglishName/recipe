import React from 'react';
import RecipeFigure from './RecipeFigure/RecipeFigure';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import RecipeIngredients from './RecipeIngredients/RecipeIngredients';
import RecipeDirection from './RecipeDirection/RecipeDirection';

import { connect} from 'react-redux';

import classes from './Recipe.module.css';

class Recipe extends React.Component {
    render () {
        return (
            
            <article className={classes.Recipe}>
                {
                    Object.keys(this.props.recipe).length === 0 ? null : (
                        <>
                            <RecipeFigure image={this.props.recipe.image} title={this.props.recipe.label}></RecipeFigure>
                            <RecipeDetail></RecipeDetail>
                            <RecipeIngredients ingredients={this.props.recipe.ingredientLines} ingredientsWithWeight={this.props.recipe.ingredients}></RecipeIngredients>
                            <RecipeDirection link={this.props.recipe.url} author={this.props.recipe.source}></RecipeDirection>
                        </>
                    ) 
                    
                }
            </article>
            
            
        )
    }
}

const mapStateToProps = state => {
    return {
        recipe: state.recipe.recipeInfo
    }
}
export default connect(mapStateToProps, null)(Recipe);