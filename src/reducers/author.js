import {    
    GET_AUTHOR_REQUEST,
    GET_AUTHOR_SUCCESS,
    GET_AUTHOR_ERROR 
} from '../constants/index';

const initialState = {
    author: [],
    fetching: false,
    error: null
};

const author = (state = initialState || {}, action) => {
    switch(action.type) {
        case GET_AUTHOR_REQUEST:
            console.log('Ready');
            return { ...state, fetching: true }

        case GET_AUTHOR_SUCCESS:
            return { ...state, author: action.payload, fetching: false }

        case GET_AUTHOR_ERROR:
            return { ...state, error: action.payload, fetching: false }

        default:
            return state;
    }
}

export default author;