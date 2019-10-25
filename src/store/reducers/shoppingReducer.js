import * as ShoppingActionTypes from '../actions/shoppingActions';

const initialState = {
    
}

export const shoppingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ShoppingActionTypes.ADD_TO_SHOPPING_CART: 
            if(!state.ingredients)
                return {
                    ...state,
                    ingredients: action.ingredients
                }
            else {
                const oldIngredients = state.ingredients;
                return {
                    ...state,
                    ingredients: oldIngredients.concat(action.ingredients)
                }
            }
        case ShoppingActionTypes.REMOVE_FROM_SHOPPING_CART:
            return {
                ...state,
                ingredients: state.ingredients.filter(ingredient => ingredient !== action.ingredient)
            }        
            
        default:
    }
    return state;
}