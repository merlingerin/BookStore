import { combineReducers } from 'redux';

import books from './books.js';
import authors from './authors.js';
import authorInfo from './authorInfo.js';
import bookInfo from './bookInfo.js';

export default combineReducers({
    books,
    bookInfo,
    authors,
    authorInfo
});