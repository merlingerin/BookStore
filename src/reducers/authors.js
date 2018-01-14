import {
    GET_AUTHORS_REQUEST,
    GET_AUTHORS_SUCCESS,
    GET_AUTHORS_ERROR,    
} from '../constants/index';

const initialState = {
    authors: [],
    fetching: false,
    error: null
};

const authors = (state = initialState || {}, action) => {
    switch(action.type) {
        case GET_AUTHORS_REQUEST:
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