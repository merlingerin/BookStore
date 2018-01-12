import {
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_BOOK_ERROR,    
} from '../constants/index';
import {
    URL_BOOK,
} from '../api/api';
import { dispatch } from 'redux';

export const getBook = () => {
    return (dispatch) => {
        dispatch({
            type: GET_BOOK_REQUEST,
            payload: null
        });

        fetch(URL_BOOK)
        .then(data => data.json())
        .then((books) => dispatch({
            type: GET_BOOK_SUCCESS,
            payload: books
        }))
        .catch((error) => dispatch({
            type: GET_BOOK_ERROR,
            payload: error
        }));
    }
}