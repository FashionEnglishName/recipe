import * as SearchActionTypes from '../actions/searchActions';

const initialState = {
    recipeList: {}
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SearchActionTypes.SEARCH_SUCCESS:
            return {
                ...state,
                recipeList: action.recipeList,
                from: action.from,
                to: action.to,
                count: action.count,
                keywords: action.keywords
            }
        case SearchActionTypes.SEARCH_ERROR:
            return {
                ...state,
                err: action.err
            }
        case SearchActionTypes.SEARCH_START:
        case SearchActionTypes.SEARCH_END:
            return {
                ...state,
                showLoading: action.showLoading
            }
        default:
    }
    return state;
}