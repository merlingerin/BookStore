import {
    GET_BOOKS_REQUEST,
    GET_BOOKS_SUCCESS,
    GET_BOOKS_ERROR
} from '../constants/index';

const initialState = {
    books: [],
    fetching: false,
    error: null
};

const books = (state = initialState || {}, action) => {
    switch(action.type) {
        case GET_BOOKS_REQUEST:
            return { ...state, fetching: true }

        case GET_BOOKS_SUCCESS:
            return { ...state, books: action.payload, fetching: false }

        case GET_BOOKS_ERROR:
            return { ...state, error: action.payload, fetching: false }

        default:
            return state;
    }
}

export default books;