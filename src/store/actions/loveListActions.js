import request from '../../utils/request';
import * as CONFIG from '../../config/api/apiConfig';
import { open_recipe } from './viewRecipeActions';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const VIEW_LOVE = 'VIEW_LOVE';
export const VIEW_LOVE_ERROR = 'VIEW_LOVE_ERROR';

export const add = (recipe) => {
    return {
        type: ADD,
        recipe
    }
}

export const remove = (uri) => {
    return {
        type: REMOVE,
        uri
    }
}

export const get_loved_recipe = (uri) => {
    const query = {app_id: CONFIG.APP_ID, app_key: CONFIG.APP_KEY, r: encodeURIComponent(uri)};
    return dispatch => {
        request("https://api.edamam.com/search", query).then(res => {
            dispatch(open_recipe(res[0]));
        }).catch(err => {
            dispatch(view_love_error(err));
        });
    }
}

// const view_love = (lovedRecipe) => {
//     console.log(lovedRecipe);

//     return {
//         type: VIEW_LOVE,
//         lovedRecipe
//     }
// }

export const view_love_error = (err) => {
    return {
        type: VIEW_LOVE_ERROR,
        err
    }
}