import * as SearchActionTypes from '../actions/searchActions';

const initialState = {
    recipeList: {}
}

export const searchReducer = (state = initialState, action) => {
    console.log("enter serach reducer");
    console.log("search action: ", action.type);
    switch (action.type) {
        case SearchActionTypes.SEARCH_SUCCESS:
            console.log("search reducer: " , action);
            return {
                ...state,
                recipeList: action.recipeList,
                from: action.from,
                to: action.to,
                count: action.count,
                keywords: action.keywords
            }
        case SearchActionTypes.SEARCH_ERROR:
            console.log("error", action.err);
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