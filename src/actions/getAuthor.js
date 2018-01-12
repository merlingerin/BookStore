import {
    GET_AUTHOR_REQUEST,
    GET_AUTHOR_SUCCESS,
    GET_AUTHOR_ERROR,    
} from '../constants/index';
import {
    URL_AUTHOR,
} from '../api/api';
import { dispatch } from 'redux';

export const getAuthor = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_AUTHOR_REQUEST,
            payload: null
        });

        fetch(`${URL_AUTHOR(id)}`)
        .then(data => data.json())
        .then((books) => dispatch({
            type: GET_AUTHOR_SUCCESS,
            payload: books
        }))
        .catch((error) => dispatch({
            type: GET_AUTHOR_ERROR,
            payload: error
        }));
    }
}