import {
    GET_BOOK_REQUEST,
    GET_BOOK_SUCCESS,
    GET_BOOK_ERROR,
} from '../constants/index';

const initialState = {
    book: [],
    fetching: false,
    error: null
};

const book = (state = initialState || {}, action) => {
    switch(action.type) {
        case GET_BOOK_REQUEST:
            console.log('Ready');
            return { ...state, fetching: true }

        case GET_BOOK_SUCCESS:
            return { ...state, book: action.payload, fetching: false }

        case GET_BOOK_ERROR:
            return { ...state, error: action.payload, fetching: false }

        default:
            return state;
    }
}

export default book;