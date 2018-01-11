import {
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_ERROR,
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_AUTHORS_REQUEST,
    GET_AUTHORS_SUCCESS,
    GET_AUTHOR_REQUEST,
    GET_AUTHOR_SUCCESS
} from '../constants/index';
import {
    URL_BOOKS,
    URL_BOOK,
    URL_AUTHORS,
    URL_AUTHOR
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