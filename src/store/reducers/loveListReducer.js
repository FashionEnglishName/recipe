import * as LoveListActionTypes from '../actions/loveListActions';

const initialState = {
    loveList: [

    ]
}

export const loveReducer = (state = initialState, action) => {
    let newLoveList = [];
    switch (action.type) {
        case LoveListActionTypes.ADD: 
            const recipeInfo = {
                recipe: action.recipe
            }
            newLoveList = state.loveList.concat(recipeInfo);
            return {
                ...state,
                loveList: newLoveList
            }
        case LoveListActionTypes.REMOVE:
            newLoveList = state.loveList.filter(love => love.uri !== action.uri);
            return {
                ...state,
                loveList: newLoveList
            }
        case LoveListActionTypes.VIEW_LOVE:
            return {
                ...state,
                LovedRecipe: action.LovedRecipe
            }

        case LoveListActionTypes.VIEW_LOVE_ERROR: 
            return {
                ...state,
                err: action.err
            }
        default:
    }
    return state;
}