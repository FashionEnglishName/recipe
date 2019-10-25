import * as actionTypes from '../actions/viewRecipeActions';

const initialState = {
    recipeInfo : {}
}

export const viewRecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_RECIPE: {
            return {
                ...state,
                recipeInfo: action.recipeInfo
            }
        }
        default:
    }
    return state;
}