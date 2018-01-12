import {
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_ERROR,  
    GET_AUTHORS_REQUEST,
    GET_AUTHORS_SUCCESS,
    GET_AUTHORS_ERROR,    
} from '../constants/index';
import {
    URL_BOOKS,
    URL_AUTHORS,
} from '../api/api';
import { dispatch } from 'redux';

export const getBooks = () => {
    return (dispatch) => {
        dispatch({
            type: GET_BOOKS_REQUEST,
            payload: null
        });

        fetch(URL_BOOKS)
        .then(data => data.json())
        .then((books) => dispatch({
            type: GET_BOOKS_SUCCESS,
            payload: books
        }))
        .catch((error) => dispatch({
            type: GET_BOOKS_ERROR,
            payload: error
        }));
    }
}

export const getAuthors = () => {
    return (dispatch) => {
        dispatch({
            type: GET_AUTHORS_REQUEST,
            payload: null
        });

        fetch(URL_AUTHORS)
        .then(data => data.json())
        .then((books) => dispatch({
            type: GET_AUTHORS_SUCCESS,
            payload: books
        }))
        .catch((error) => dispatch({
            type: GET_AUTHORS_ERROR,
            payload: error
        }));
    }
}