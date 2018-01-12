import {
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_ERROR,
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_BOOK_ERROR,    
    GET_AUTHORS_REQUEST,
    GET_AUTHORS_SUCCESS,
    GET_AUTHORS_ERROR,    
    GET_AUTHOR_REQUEST,
    GET_AUTHOR_SUCCESS,
    GET_AUTHOR_ERROR 
} from '../constants/index';

const initialState = {
    authors: [],
    fetching: false,
    error: null
};

const authors = (state = initialState || {}, action) => {
    switch(action.type) {
        case GET_AUTHORS_REQUEST:
            console.log('Ready');
            return { ...state, fetching: true }

        case GET_AUTHORS_SUCCESS:
            return { ...state, authors: action.payload, fetching: false }

        case GET_AUTHORS_ERROR:
            return { ...state, error: action.payload, fetching: false }

        default:
            return state;
    }
}

export default authors;