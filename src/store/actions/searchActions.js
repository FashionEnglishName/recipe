import request from '../../utils/request';
import * as CONFIG from '../../config/api/apiConfig';

export const SEARCH_START = "SEARCH_START";
export const SEARCH_END = "SEARCH_END";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const PAGINATION = "PAGINATION";

const search_success = (data, from, to, count, keywords) => {
    return {
        type: SEARCH_SUCCESS,
        recipeList: data,
        from: from,
        to: to,
        count: count,
        keywords: keywords
    };
}

const search_error = (err) => {
    return {
        type: SEARCH_ERROR,
        err: err
    };
}

const search_start = () => {
    return {
        type: SEARCH_START,
        showLoading: true
    }
}

const search_end = () => {
    return {
        type: SEARCH_END,
        showLoading: false
    }
}

export const search = (keywords) => {
    const query = {app_id: CONFIG.APP_ID, app_key: CONFIG.APP_KEY, q: keywords};
    return dispatch => {
        dispatch(search_start());
        request("https://api.edamam.com/search", query).then(res => {
            dispatch(search_end());
            dispatch(search_success(res.hits, res.from, res.to, res.count, res.params.q));
        }).catch(err => {
            dispatch(search_end());
            dispatch(search_error(err));
        });
    }
}

export const paginate = (from, keywords) => {
    const query = {app_id: CONFIG.APP_ID, app_key: CONFIG.APP_KEY, q: keywords, from: from};
    return dispatch => {
        dispatch(search_start());
        request("https://api.edamam.com/search", query).then(res => {
            dispatch(search_end());
            dispatch(search_success(res.hits, res.from, res.to, res.count, res.params.q));
        }).catch(err => {
            dispatch(search_end());
            dispatch(search_error(err));
        });
    }
}

