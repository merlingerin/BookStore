import {
    GET_AUTHOR_INFO_REQUEST,
    GET_AUTHOR_INFO_SUCCESS,
    GET_AUTHOR_INFO_ERROR    
} from '../constants/index';
import {
    URL_AUTHOR,
    URL_AUTHORS_BOOKS
} from '../api/api';

export const getAuthorInfo = (id) => {
    return (dispatch) => {
        dispatch({
            type: GET_AUTHOR_INFO_REQUEST,
            payload: null
        });

        fetch(`${URL_AUTHOR(id)}`)
        .then(data => data.json())
        .then((authorInfo) => {
            fetch(`${URL_AUTHORS_BOOKS(id)}`)
            .then((books) => books.json())
            .then((books) => dispatch({
                type: GET_AUTHOR_INFO_SUCCESS,
                payload: {
                    books: books,
                    author: authorInfo
                }
            }))
        })
        .catch((error) => dispatch({
            type: GET_AUTHOR_INFO_ERROR,
            payload: error
        }));
    }
}