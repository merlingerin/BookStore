import {
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_BOOK_ERROR,    
} from '../constants/index';
import {
    URL_BOOK,
} from '../api/api';
import { dispatch } from 'redux';

export const getBookInfo = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_BOOK_REQUEST,
            payload: null
        });

        fetch(`${URL_BOOK(id)}`)
        .then(data => data.json())
        .then((bookInfo) => dispatch({
            type: GET_BOOK_SUCCESS,
            payload: bookInfo
        }))
        .catch((error) => dispatch({
            type: GET_BOOK_ERROR,
            payload: error
        }));
    }
}