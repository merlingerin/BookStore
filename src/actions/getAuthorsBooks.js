import {
    GET_AUTHORS_BOOKS_REQUEST,
    GET_AUTHORS_BOOKS_SUCCESS,
    GET_AUTHORS_BOOKS_ERROR,    
} from '../constants/index';
import {
    URL_AUTHORS_BOOKS,
} from '../api/api';
import { dispatch } from 'redux';

export const getAuthorsBooks = (id) => {
    return async(dispatch) => {
        await dispatch({
            type: GET_AUTHORS_BOOKS_REQUEST,
            payload: null
        });

        await fetch(`${URL_AUTHORS_BOOKS(id)}`)
        .then(data => data.json())
        .then((books) => dispatch({
            type: GET_AUTHORS_BOOKS_SUCCESS,
            payload: books
        }))
        .catch((error) => dispatch({
            type: GET_AUTHORS_BOOKS_ERROR,
            payload: error
        }));
    }
}