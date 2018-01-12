import {    
    GET_AUTHOR_INFO_REQUEST,
    GET_AUTHOR_INFO_SUCCESS,
    GET_AUTHOR_INFO_ERROR  
} from '../constants/index';

const initialState = {
    author: {},
    books: [],
    fetching: false,
    error: null
};

const authorInfo = (state = initialState || {}, action) => {
    switch(action.type) {
        case GET_AUTHOR_INFO_REQUEST:
            return { ...state, fetching: true }

        case GET_AUTHOR_INFO_SUCCESS:
            return { ...state, author: action.payload.author, books: action.payload.books, fetching: false }

        case GET_AUTHOR_INFO_ERROR:
            return { ...state, error: action.payload, fetching: false }
        
        default:
            return state;
    }
}

export default authorInfo;