import React, { Component } from "react";
import RecipeIngredient from './RecipeIngredient/RecipeIngredient';
import Button from '../../UI/Button/Button';

import classes from './RecipeIngredients.module.css';
import icon from '../../../assets/images/icons.svg';

import { connect } from 'react-redux' ;
import { add_to_shopping_cart } from '../../../store/actions/shoppingActions';

class RecipeIngredients extends Component {

    render () {
        return (
            <div className={classes.RecipeIngredients}> 
                <ul className={classes.RecipeIngredientList}>
                    {
                        this.props.ingredients.map(ingredient => {
                            return (
                            <RecipeIngredient
                                key={ingredient}
                                line={ingredient}
                            ></RecipeIngredient>
                            );
                        })
                    }
                </ul>
                <Button classList={["ButtonSmall"]} clicked={() => this.props.clickShoppingCartHandler(this.props.ingredientsWithWeight)}>
                    <svg>
                        <use href={icon + "#icon-shopping-cart"}></use>
                    </svg>
                    <span>Add to shopping list</span>
                </Button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        clickShoppingCartHandler: (ingredients) => dispatch(add_to_shopping_cart(ingredients))
    }
}
export default connect(null, mapDispatchToProps)(RecipeIngredients);